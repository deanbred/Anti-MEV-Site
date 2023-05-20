import { ConnectButton } from "web3uikit"

export default function Header() {
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-[#d3b581] to-[#2d3424] p-3 border-b-2 flex flex-row justify-center overflow-hidden">
      <h1 className="mr-auto font-semibold text-[#7c0009] py-2 px-1 lg:text-6xl md:text-5xl sm:text-5xl xs:text-4xl text-3xl">
        ANTI MEV TOKEN
      </h1>
      <div className="ml-auto py-2 px-1 float-right">
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  )
}
