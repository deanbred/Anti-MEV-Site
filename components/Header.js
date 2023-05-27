import { ConnectButton } from "web3uikit"

export default function Header() {
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-[#b8a57e] to-[#7a6b54] p-3 border-b-2 flex flex-row justify-center overflow-hidden">
{/*       <h1 className="mr-auto font-semibold text-[#a43d2b] py-2 px-1 lg:text-6xl md:text-5xl sm:text-5xl xs:text-4xl text-3xl">
        DEATH TO BOTS
      </h1> */}
      <div className="py-2 px-1">
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  )
}
