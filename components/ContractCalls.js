import { contractAddresses, abi, abiToken } from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"

let raffleString = ""

export default function ContractCalls() {
  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
  const chainId = parseInt(chainIdHex)
  const raffleAddress = "0x13901263A85505f3FdBA84aa5f06825993d65880"
  const tokenAddress = "0xc65260c36415dDc3f5b44E55939B343Da89C5D07"

  //chainId in contractAddresses ? contractAddresses[chainId][0] : null

  // State hooks
  // https://stackoverflow.com/questions/58252454/react-hooks-using-usestate-vs-just-variables
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

  const { runContractFunction: getJackpot } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getJackpot",
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
    //const jackpotFromCall = (await getJackpot()).toString()
    setRaffleState(raffleStateFromCall)
    setEntranceFee(entranceFeeFromCall)
    setNumberOfPlayers(numPlayersFromCall)
    setRecentWinner(recentWinnerFromCall)
    setRaffleState(raffleStateFromCall)
    //setJackpot(jackpotFromCall)
  }

  useEffect(() => {
    if (isWeb3Enabled) {
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
    <div className="p-6 sm:text-sm">
      <div className="float-left">
        <button
          className="bg-[#a43d2b] hover:bg-[#cb4006] text-slate-200 hover:text-slate-100 font-bold py-2 px-3 rounded ml-auto"
          onClick={async () => window.open("https://app.uniswap.org/")}
        >
          Buy on Uniswap
        </button>
      </div>
      {raffleAddress ? (
        <>
          <div className="float-right">
            <button
              className="bg-[#a43d2b] hover:bg-[#cb4006] text-slate-200 hover:text-slate-100 font-bold py-2 px-3 rounded ml-auto"
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
            <div className="px-2 py-1 text-slate-800">
              Total Players: {numberOfPlayers}
            </div>
            <div className="px-2 text-slate-800">
              {/* VRF Jackpot: {jackpotFromCall} */}
            </div>
            <div className="py-1 px-2 text-slate-800">
              Current State: {raffleString}
            </div>
            <div className="py-1 px-2 text-slate-800">
              Entrance Fee: {ethers.utils.formatUnits(entranceFee, "ether")} ETH
            </div>
          </div>
        </>
      ) : (
        <div>Please connect to a supported chain </div>
      )}{" "}
    </div>
  )
}
