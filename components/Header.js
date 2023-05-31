import { ConnectButton } from "web3uikit"
import Image from "next/image"

export default function Header() {
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-[#b8a57e] to-[#7a6b54] p-3 border-b-2 flex flex-row justify-center overflow-hidden">
      <div className="mr-auto">
        <Image src="logo-01.png" width={64} height={64} alt="Logo"></Image>
      </div>
      <div className=" text-4xl mr-auto flex flex-col justify-center">
        MEV Resistant ERC20 Token
      </div>
      <div className="ml-auto flex flex-col justify-center">
        <ConnectButton />
      </div>
    </nav>
  )
}
