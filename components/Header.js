import { ConnectButton } from "web3uikit"

export default function Header() {
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-[#1d485d] to-[#871E3D] text-slate-800 p-3 border-b-2 flex flex-row justify-center overflow-hidden">
      <h1 className="mr-auto py-2 px-1 font-kake lg:text-5xl md:text-xl sm:text-md">
        Everyone deserves some GMUSSY
      </h1>
      <div className="ml-auto py-2 px-1 float-right">
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  )
}
