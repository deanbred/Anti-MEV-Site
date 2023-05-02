import { ConnectButton } from "web3uikit"

export default function Header() {
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-[#10958a] to-[#7c163c] p-3 border-b-2 flex flex-row justify-center overflow-hidden">
      <h1 className="mr-auto italic font-kake text-[#d7578f] py-2 px-1 lg:text-6xl md:text-5xl sm:text-5xl xs:text-4xl text-3xl">
        Everyone deserves some GMUSSY
      </h1>
      <div className="ml-auto py-2 px-1 float-right">
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  )
}
