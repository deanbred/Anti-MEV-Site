import { ConnectButton } from "web3uikit"
import Image from "next/image"

export default function Header() {
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-[#b8a57e] to-[#7a6b54] p-3 border-b-2 flex flex-row justify-center overflow-hidden">
      <div className="mr-auto">
        <Image src="logo-00.jpg" width={72} height={72} alt="Logo"></Image>
      </div>
      <div className=" lg:text-5xl md:text-3xl sm:text-xl text-[#a72008] font-semibold mr-auto flex flex-col justify-center">
        MEV Resistant ERC20 Token
      </div>
      <div className="ml-auto flex flex-col justify-center">
        <ConnectButton />
      </div>
    </nav>
  )
}
