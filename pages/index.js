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
        <link rel="icon" href="/logo-00.jpg" />
      </Head>
      <Header />
      <div className="flex min-h-screen flex-col overflow-hidden bg-no-repeat bg-cover md:bg-center bg-[url('../public/bg-01.jpeg')]">
        
        <div className="p-3">
          <ContractCalls className="" />
          <button
            className="p-2 float-right bg-[#a43d2b] text-stone-200 font-bold rounded-2xl"
            onClick={async () => window.open("https://app.uniswap.org/")}
          >
            Buy on Uniswap
          </button>
        </div>

        <div className="flex flex-col">
          <div className="p-3 m-3 bg-stone-200 opacity-90  md:text-xl sm:text-base rounded-2xl">
            <p className="">
              Malicious bots steal millions from crypto users by bribing miners
              to either front-run or sandwich their transactions
            </p>
            <p className="">
              This &quot;invisible tax&quot; is now known as{" "}
              <a
                href="https://www.coindesk.com/learn/what-is-mev-aka-maximal-extractable-value/"
                className="text-sky-800 hover:text-sky-600 text-base font-semibold leading-7"
              >
                Maximal Extractable Value (MEV)
              </a>
            </p>
            <p className="">
              These shady actors pollute this industry and make it harder for
              legitimate traders to make it
            </p>
            <p className="">
              Our code was developed to protect users from these losses, and
              deliver more of their trading profits
            </p>
          </div>

          <div className="flex flex-row items-center justify-center space-x-4">
            <SocialIcon url="https://t.me" network="telegram" fgColor="white" />
            <SocialIcon
              url="https://twitter.com/Anti_MEV"
              network="twitter"
              fgColor="white"
            />
            <SocialIcon
              url="https://discord.gg/nab3H9cyZQ"
              network="discord"
              fgColor="white"
            />
          </div>

          <div className="p-3 m-3 mt-10 bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2">
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p className="ml-3">
                  Fights sandwich attacks by requiring blocks to be mined
                  between 2 transfers from the same wallet
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
                <p className="ml-3">
                  Uses UniswapV3 sequencing tools to further defend against
                  front-running
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
                <p className="ml-3">
                  Max Wallet size of 3% of supply limits price manipulation by a
                  single whale
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
                <p className="ml-3">
                  Excludes a carefully curated list of known attack bots
                </p>
              </li>
            </ul>
            <div className="ml-12 mt-2 text-base font-semibold">
              <p>Want to dig deeper into Anti-MEV?</p>
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
          <div className="mb-2 flex flex-row items-center justify-center">
          <Image
            src="chainlink_badge.jpeg"
            width={175}
            height={64}
            alt="Logo"
          ></Image>
        </div>
        </div>
      </div>

      <footer className="text-[7px]">dev actually based 1KEOY</footer>
    </>
  )
}
