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
            className="bg-[#af292c] hover:bg-[#a43d2b] text-slate-200 font-bold p-2 rounded mr-8 float-right"
            onClick={async () => window.open("https://app.uniswap.org/")}
          >
            Buy on Uniswap
          </button>
        </div>
        <div className="mr-auto ml-3">
          <Image
            src="chainlink_badge.jpeg"
            width={175}
            height={64}
            alt="Logo"
          ></Image>
        </div>

        <div className="ml-auto p-2 flex flex-col">
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
        <div className="p-4 flex flex-col space-y-36">
          <div className=" bg-stone-200 drop-shadow-xl md:text-xl sm:text-base rounded-lg p-2 text-slate-800">
            <p className="px-5">
              Malicious bots steal millions from crypto users by bribing miners
              to either front-run or sandwich their transactions
            </p>
            <p className="px-5">
              This &quot;invisible tax&quot; is now known as{" "}
              <a
                href="https://www.coindesk.com/learn/what-is-mev-aka-maximal-extractable-value/"
                className="text-sky-800 hover:text-sky-600 text-base font-semibold leading-7"
              >
                Maximal Extractable Value (MEV)
              </a>
            </p>
            <p className="px-5">
              These shady actors pollute this industry and make it harder for
              legitimate traders to make it
            </p>
            <p className="px-5">
              Our code was developed to protect users from these losses, and
              deliver more of their trading profits
            </p>
          </div>
          <div className="bg-stone-200 drop-shadow-xl md:text-xl sm:text-base rounded-lg p-2 text-slate-900">
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
                <p className="ml-4">
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
                <p className="ml-4">
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
                <p className="ml-4">
                  Excludes a carefully curated list of known attack bots
                </p>
              </li>
            </ul>
            <div className="mt-2 text-base font-semibold leading-7">
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
      </div>

      <footer className="text-[7px]">dev actually based</footer>
    </>
  )
}
