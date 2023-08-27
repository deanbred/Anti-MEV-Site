/* import { ConnectButton } from "web3uikit"
import React, { Component } from "react"
import ReactDOM from "react-dom" */
import Image from "next/image"

export default function Header() {
  return (
    <nav className="z-10 font-head font-bold flex flex-row justify-center sticky top-0 bg-gradient-to-r from-[#a9ba73] to-[#1b3d3f] border-b-2 overflow-hidden">
        <h2 className="m-auto text-[#cf4230] lg:text-5xl md:text-4xl sm:text-3xl text-3xl">
          Anti-MEV
        </h2>
        <div className="p-2 mr-2">
          <Image src="logo2.jpg" width={84} height={84} alt="Logo"></Image>
        </div>
    </nav>
  )
}
