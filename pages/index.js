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
      <div className="bg-center bg-cover bg-no-repeat bg-[url('../public/bg-01.jpeg')]">
        <ContractCalls />
        {/* <main className={styles.main}> */}
          <div className="space-y-4 text-gray-600">
            <p>Designed to combat Miner Extractable Value:</p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-900 stroke-2">
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p className="ml-4">
                  Defeats sandwich attacks using multi-block delay between transfers
                </p>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-900 stroke-2">
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p className="ml-4">Enforces a Max Wallet size of 1% of token supply</p>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-900 stroke-2">
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p className="ml-4">Excludes a large curated list of known bots</p>
              </li>
            </ul>
          </div>
          <div className="">
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
        {/* </main> */}
      </div>
      <footer className="text-[7px]">dev actually based</footer>
    </>
  )
}
