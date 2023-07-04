import { ConnectButton } from "web3uikit"
import Image from "next/image"

export default function Header() {
  return (
    <nav className="p-3 z-10 flex flex-row justify-center sticky top-0 bg-gradient-to-r from-[#bfe0e2] to-[#283a4c] border-b-2 overflow-hidden">
      <div className="mr-auto">
        <Image src="logo-00.jpg" width={72} height={72} alt="Logo"></Image>
      </div>
      <div className=" ml-2 flex flex-col justify-center text-[#af292c] font-kake mr-auto lg:text-5xl md:text-4xl sm:text-xl font-semibold">
        ANTI-MEV Token
      </div>
      <div className="flex flex-col justify-center">
        <ConnectButton />
      </div>
    </nav>
  )
}
