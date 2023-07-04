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
      <div className="flex min-h-screen flex-col overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('../public/bots-01.png')]">
        <div className="p-4">
          <button
            className="p-2 font-kake font-semibold float-left bg-[#af292c] hover:bg-[#600708] text-stone-200 rounded-2xl"
            onClick={async () => window.open("https://app.uniswap.org/")}
          >
            Buy on Uniswap
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-3 max-w-4xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <p className=" text-center">
              <a
                href="https://dexscreener.com/goerli/0x98f04bf77cac682cdb6c6b41aaad5c59d5086c62"
                className="text-sky-800 hover:text-[#af292c] font-kake font-semibold leading-7"
              >
                Anti-MEV
              </a>{" "}
              is a new crypto token that actively{" "}
              <span className="text-[#af292c] font-kake font-semibold">
                defends itself
              </span>{" "}
              from MEV theft
            </p>
            <p className="mt-3 text-center">
              Malicious{" "}
              <a
                href="https://eigenphi.io/"
                className="text-sky-800 hover:text-[#af292c] font-kake font-semibold"
              >
                MEV bots
              </a>{" "}
              have extracted over $1.3 billion from Ethereum users
            </p>
            <p className="mt-3 text-center">
              This{" "}
              <span className="text-[#af292c] font-kake font-semibold">Invisible tax</span>{" "}
              is known as{" "}
              <a
                href="https://www.coindesk.com/learn/what-is-mev-aka-maximal-extractable-value/"
                className="text-sky-800 hover:text-[#af292c] font-kake font-semibold"
              >
                Maximal Extractable Value
              </a>{" "}
            </p>
            <p className="mt-3 text-center">
              Our token was developed to{" "}
              <span className="text-[#af292c] font-kake font-semibold">
                protect users
              </span>{" "}
              from these undue losses
            </p>
          </div>
          <div className=" m-3 flex flex-row items-center justify-center space-x-4">
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
            <SocialIcon url="https://t.me" network="telegram" fgColor="white" />
          </div>
          <div className="p-3 max-w-3xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <p className=" text-center">
              The{" "}
              <span className="text-sky-800 hover:text-[#af292c] font-kake font-semibold">
                MEV Mafia
              </span>{" "}
              pollutes our industry and robs profits from legitimate traders
            </p>
            <ul className=" mt-3 space-y-4">
              <li className="flex items-center">
                <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-800 stroke-2">
                  <circle cx="12" cy="12" r="11" />
                  <path
                    d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                    fill="none"
                  />
                </svg>
                <p className="ml-3">
                  {" "}
                  <span className="text-[#af292c] font-kake font-semibold">
                    Sandwich Attacks :
                  </span>{" "}
                  Our token contract requires blocks to be mined between 2
                  transfers from 1 wallet - This prevents bots from sandwiching
                  your trades
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
                  <span className="text-[#af292c] font-kake font-semibold">
                    Bribe Detector :
                  </span>{" "}
                  The code calculates a rolling average of gas to expect, and
                  rejects bribes from front-running bots - This limits the value
                  extracted by reording transactions
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
                  <span className="text-[#af292c] font-kake font-semibold">
                    New Pair Snipers :
                  </span>{" "}
                  Max wallet size of 4.9% stops early aping bots from buying up
                  the supply of{" "}                <a
                  href="https://en.wikipedia.org/wiki/Fibonacci_sequence"
                  className="text-sky-800 hover:text-[#af292c] font-kake font-semibold"
                >
                  1,123,581,321
                </a>{" "}tokens
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
                <p className="ml-3 text-[#af292c] font-kake font-semibold">
                  NO TAXES : NO PRE-SALE : NO VC BAGS
                </p>
              </li>
              <p className="text-center">
                We actively maintain a growing list of known MEV attack bots
              </p>
              <p className="text-center">
                Notice a new bot?{" "}
                <a
                  href="mailto:support@antimev.io?subject=New%20MEV%20Bot%20Detected"
                  className="text-sky-800 hover:text-[#af292c] font-kake font-semibold leading-7"
                >
                  Let us know!
                </a>
              </p>
            </ul>
          </div>
          <div className="p-3 mt-3 text-center max-w-3xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <p className="">
              The transparency of blockchain allows us to see these bots attack
              in real time
            </p>
            <p className="mt-3 text-[#af292c] font-kake font-semibold">
              Now we can stop them!
            </p>
            <p className="mt-3">
              Optional weekly lottery is a{" "}
              <a
                href="https://vrf.chain.link/"
                className="text-sky-800 hover:text-[#af292c] font-kake font-semibold"
              >
                verifiably random{" "}
              </a>
              and fully{" "}
              <a
                href="https://automation.chain.link/"
                className="text-sky-800 hover:text-[#af292c] font-kake font-semibold"
              >
                automated{" "}
              </a>
              smart contract
            </p>
            <p className="mt-3">
              Winners entered for monthly{" "}
              <span className="text-sky-800 hover:text-[#af292c] font-kake font-semibold">Airdrops</span>{" "}
            </p>
            <p className="mt-3 underline">
              <span className="text-[#af292c] font-kake underline font-semibold ">
                MEV is theft... Anti-MEV gives back
              </span>
            </p>
          </div>
          <div className="mt-3 flex flex-col items-center justify-center">
            <ContractCalls className="" />
          </div>
          <div className="p-3 mt-3 max-w-3xl bg-stone-200 opacity-90 md:text-base sm:text-base rounded-2xl">
            <p className="text-center">
              Uses open source code from{" "}
              <a
                href="https://www.openzeppelin.com/"
                className="text-sky-800 hover:text-[#af292c] font-kake font-semibold"
              >
                Openzeppelin{" "}
              </a>
            </p>
            <p className="text-center">
              AI generated art from{" "}
              <a
                href="https://discord.gg/midjourney"
                className="text-sky-800 hover:text-[#af292c] font-kake font-semibold"
              >
                Midjourney{" "}
              </a>
            </p>
            <div className="mt-1 text-base font-semibold">
              <Image
                className="float-right rounded-md shadow-lg"
                src="chainlink_badge.jpeg"
                width={175}
                height={64}
                alt="Logo"
              ></Image>
              <p className="ml-3">Want a deep dive into Anti-MEV?</p>
              <p className="ml-3">
                <a
                  href="https://github.com/deanbred/Anti-MEV-Token.git"
                  className="text-sky-800 hover:text-[#af292c] font-kake"
                >
                  Read the code
                </a>
              </p>
            </div>
          </div>
          <div className="p-3 mt-3 mb-3 max-w-3xl bg-stone-200 opacity-90 md:text-base sm:text-base rounded-2xl">
            <a
              className=""
              data-theme="light"
              href="https://twitter.com/Anti_MEV?ref_src=twsrc%5Etfw"
            >
              Tweets by @
              <span className="text-[#af292c] font-kake font-semibold">
                Anti-MEV
              </span>
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
            ></script>
          </div>
        </div>
      </div>
      <footer className="text-[8px] text-center">1KEOY</footer>
    </>
  )
}
