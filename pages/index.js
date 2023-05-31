import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Header from "@/components/Header"
import ContractCalls from "@/components/ContractCalls"
import { SocialIcon } from "react-social-icons"
import ReactDOM from "react-dom"

export default function Home() {
  return (
    <>
      <Head>
        <title>Anti-MEV Token</title>
        <meta name="description" content="Crypto Token Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-01.png" />
      </Head>
      <Header />
      <div className="flex min-h-screen flex-col overflow-hidden bg-center bg-cover bg-no-repeat bg-[url('../public/bg-01.jpeg')]">
        <div className="p-3">
          <button
            className="bg-[#a72008] hover:bg-[#a43d2b] text-slate-200 hover:text-white font-bold py-2 px-3 rounded ml-auto"
            onClick={async () => window.open("https://app.uniswap.org/")}
          >
            Buy on Uniswap
          </button>
          <ContractCalls className="" />
        </div>

        <div className="p-3 flex flex-col space-y-2 ml-auto">
          <SocialIcon url="https://t.me" network="telegram" fgColor="white" />
          <SocialIcon
            url="https://twitter.com"
            network="twitter"
            fgColor="white"
          />
          <SocialIcon
            url="https://www.discord.com"
            network="discord"
            fgColor="white"
          />
        </div>

        <div className="bg-[#decb9f] opacity-90 absolute bottom-4 left-1/4 pt-2 max-w-fit rounded-lg px-8 space-y-4 text-slate-900">
          <p>Malicious bots steal millions from crypto users by reordering transactions in a block.</p>
          <p>Our code was developed specifically to fight back against this MEV Mafia!</p>
          <ul className="space-y-4">
            <li className="flex items-center hover:stroke-sky-600">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2">
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="ml-4">
                Defeats sandwich attacks by requiring a 5 block delay between
                transfers
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2">
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="ml-4">
                Enforces an immutable Max Wallet size of 3.33% of token supply
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2">
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="ml-4">
                Excludes a carefully curated list of known attack bots
              </p>
            </li>
          </ul>
          <div className="text-base font-semibold leading-7">
          <p className="text-gray-900">Want to dig deeper into Anti-MEV?</p>
          <p>
            <a
              href="https://github.com/deanbred/Anti-MEV-Token.git"
              className="text-sky-800 hover:text-sky-600"
            >
              Read the code &rarr;
            </a>
          </p>
        </div>
        </div>

      </div>

      <footer className="text-[7px]">dev actually based</footer>
    </>
  )
}
