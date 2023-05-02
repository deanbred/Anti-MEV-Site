import { contractAddresses, abi } from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"
import { ethers } from "ethers"
//import { Network, Alchemy } from "alchemy-sdk"

/* const settings = {
    apiKey: "4RrfCsQcUb2J3em8Ql1w7R5Es-cfZAJp",
    network: Network.ETH_SEPOLIA,
};

const alchemy = new Alchemy(settings);
    
const latestBlock = await alchemy.core.getBlockNumber()
console.log("The latest block number is", latestBlock)
// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893')
    .then(console.log);

// Get all the NFTs owned by an address
const nfts = alchemy.nft.getNftsForOwner("0xshah.eth");

// Listen to all new pending transactions
alchemy.ws.on(
    { method: "alchemy_pendingTransactions",
    fromAddress: "0xshah.eth" },
    (res) => console.log(res) */

export default function ContractCalls() {
  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis()
  const chainId = parseInt(chainIdHex)
  const raffleAddress = "0x13901263A85505f3FdBA84aa5f06825993d65880"
  
  //chainId in contractAddresses ? contractAddresses[chainId][0] : null

  // State hooks
  // https://stackoverflow.com/questions/58252454/react-hooks-using-usestate-vs-just-variables
  const [entranceFee, setEntranceFee] = useState("0")
  const [numberOfPlayers, setNumberOfPlayers] = useState("0")
  const [recentWinner, setRecentWinner] = useState("0")
  const [raffleState, setRaffleState] = useState("0")

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
    setEntranceFee(entranceFeeFromCall)
    setNumberOfPlayers(numPlayersFromCall)
    setRecentWinner(recentWinnerFromCall)
    setRaffleState(raffleStateFromCall)
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
          className="bg-[#0c948a] hover:bg-[#b64267] text-slate-200 hover:text-slate-100 font-bold py-2 px-3 rounded ml-auto"
          onClick={async () => window.open("https://app.uniswap.org/")}
          disabled={isLoading || isFetching}
        >
          Buy on Uniswap
        </button>
        <div className="px-2 py-1 text-slate-100">
          Trading at: {ethers.utils.formatUnits(entranceFee, "ether")} USD
        </div>
        <div className="px-2 text-slate-100">Holders: {0}</div>
      </div>
      {raffleAddress ? (
        <>
          <div className="float-right">
            <button
              className=" bg-[#0c948a] hover:bg-[#b64267] text-slate-200 hover:text-slate-100 font-bold py-2 px-3 rounded ml-auto"
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
            <div className="px-2 py-1 text-slate-100">
              Total Players: {numberOfPlayers}
            </div>
            <div className="px-2 text-slate-100">
              VRF Jackpot: {recentWinner}
            </div>            
            <div className="py-1 px-2 text-slate-100">
              Raffle State: {raffleState}
            </div>
            <div className="py-1 px-2 text-slate-100">
              Entrance Fee: {entranceFee}
            </div>

          </div>
          {/* <div className="px-2 text-slate-100">Latest Block: {latestBlock}</div> */}
        </>
      ) : (
        <div></div>
      )}{" "}
    </div>
  )
}
