import { contractAddresses, abi, abiToken } from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"

let raffleString, jackpotString, id

export default function ContractCalls() {
  const { Moralis, isWeb3Enabled, chainId, account } = useMoralis()
  id = parseInt(chainId)
  console.log(`chain is ${id}`)
  console.log(`account is ${account}`)

  const raffleAddress =
    id in contractAddresses ? contractAddresses[id][0] : null
  const tokenAddress = "0x80faA8b68d135C313f6D778138c4f32f4A6ef962"

  // State hooks
  const [entranceFee, setEntranceFee] = useState("0")
  const [numberOfPlayers, setNumberOfPlayers] = useState("0")
  const [recentWinner, setRecentWinner] = useState("0")
  const [raffleState, setRaffleState] = useState("0")
  const [jackpot, setJackpot] = useState("0")

  const dispatch = useNotification()

  const {
    runContractFunction: enterRaffle,
    data: enterTxResponse,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    msgValue: entranceFee,
    params: {},
  })

  /* View Functions */
  const { runContractFunction: balanceOf } = useWeb3Contract({
    abi: abiToken,
    contractAddress: tokenAddress,
    functionName: "balanceOf",
    params: {},
  })

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
    params: {},
  })

  const { runContractFunction: getPlayersNumber } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getNumberOfPlayers",
    params: {},
  })

  const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getRecentWinner",
    params: {},
  })

  const { runContractFunction: getRaffleState } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getRaffleState",
    params: {},
  })

  async function updateUIValues() {
    // Another way we could make a contract call:
    // const options = { abi, contractAddress: raffleAddress }
    // const fee = await Moralis.executeFunction({
    //     functionName: "getEntranceFee",
    //     ...options,
    // })
    const entranceFeeFromCall = (await getEntranceFee()).toString()
    const numPlayersFromCall = (await getPlayersNumber()).toString()
    const recentWinnerFromCall = await getRecentWinner()
    const raffleStateFromCall = await getRaffleState()

    if (raffleStateFromCall == 0) {
      raffleString = "Open"
    } else if (raffleStateFromCall == 1) {
      raffleString = "Closed"
    }
    setRaffleState(raffleStateFromCall)

    jackpotString = (numPlayersFromCall * entranceFeeFromCall) / 1e18
    setJackpot(jackpotString)

    setEntranceFee(entranceFeeFromCall)
    setNumberOfPlayers(numPlayersFromCall)
    setRecentWinner(recentWinnerFromCall)
    setRaffleState(raffleStateFromCall)
  }

  useEffect(() => {
    if (isWeb3Enabled && id == 5) {
      updateUIValues()
    }
  }, [isWeb3Enabled])

  const handleNewNotification = () => {
    dispatch({
      type: "success",
      message: "Transaction Complete!",
      title: "Transaction Notification",
      position: "topR",
    })
  }

  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1)
      updateUIValues()
      handleNewNotification(tx)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="float-right font-semibold text-slate-900">
      {raffleAddress ? (
        <>
          <div className="">
            <button
              className="bg-[#a72008] hover:bg-[#a43d2b] text-slate-200 hover:text-white font-bold py-2 px-3 rounded"
              onClick={async () =>
                await enterRaffle({
                  onSuccess: handleSuccess,
                  onError: (error) => console.log(error),
                })
              }
              disabled={isLoading || isFetching}
            >
              {isLoading || isFetching ? (
                <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
              ) : (
                "Enter Lottery"
              )}
            </button>
            <div className="bg-[#decb9f] opacity-90 rounded-lg p-2">
              <div>Total Players: {numberOfPlayers}</div>
              <div>VRF Jackpot: {jackpotString} ETH</div>
              <div>
                Entrance Fee: {ethers.utils.formatUnits(entranceFee, "ether")}{" "}
                ETH
              </div>
              <div>Current State: {raffleString}</div>
            </div>
          </div>
        </>
      ) : (
        <div>Connect to Ethereum Mainnet</div>
      )}{" "}
    </div>
  )
}
