/* import { ConnectButton } from "web3uikit"
import React, { Component } from "react"
import ReactDOM from "react-dom" */
import Image from "next/image"

export default function Header() {
  return (
    <nav className="z-10 font-kake font-bold flex flex-row justify-center sticky top-0 bg-gradient-to-r from-slate-200 to-[#6caffe] border-b-2 overflow-hidden">
      <div className="p-2 mr-auto">
        <Image src="logo.png" width={72} height={72} alt="Logo"></Image>
      </div>

      <div className="flex flex-col justify-center text-[#234afd] mr-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
        OnlyFrens
      </div>

      <div className="mr-2 flex flex-col justify-center">
        <button
          className="p-2 bg-[#69974f] hover:text-[#b16541] text-[#234afd] rounded-2xl"
          onClick={async () =>
            window.open(
              "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x5Cdbd3288740BE2E83D8421a18d163c4eB022966"
            )
          }
        >
          Buy on UniSwap
        </button>
      </div>
    </nav>
  )
}
