/* import { ConnectButton } from "web3uikit"
import React, { Component } from "react"
import ReactDOM from "react-dom" */
import Image from "next/image"

export default function Header() {
  return (
    <nav className="z-10 font-head font-bold flex flex-row justify-center sticky top-0 bg-gradient-to-r from-[#a9ba73] to-[#1b3d3f] border-b-2 overflow-hidden">
        <h2 className="pl-4 ml-auto my-auto text-[#cf4230] lg:text-5xl md:text-4xl sm:text-3xl text-3xl">
          Anti-MEV
        </h2>
        <div className="p-2 ml-auto">
          <Image src="logo2.jpg" width={75} height={75} alt="Logo"></Image>
        </div>
    </nav>
  )
}
