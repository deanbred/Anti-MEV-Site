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

      <div className="flex min-h-screen flex-col overflow-hidden bg-no-repeat bg-cover bg-center bg-[url('../public/spider.png')]">
        <div className="p-4">
          <ContractCalls className="" />
          <button
            className="p-2 font-kake font-semibold float-left bg-[#af292c] text-stone-200 rounded-2xl"
            onClick={async () => window.open("https://app.uniswap.org/")}
          >
            Buy on Uniswap
          </button>
        </div>

        <div className="m-3 flex flex-col items-center">
          <div className="p-3 w-fit bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <p className="">
              Malicious bots steal millions from crypto users through
              front-running and sandwich attacks
            </p>
            <p className="mt-3">
              This &quot;invisible tax&quot; is now known as{" "}
              <a
                href="https://www.coindesk.com/learn/what-is-mev-aka-maximal-extractable-value/"
                className="text-sky-800 hover:text-sky-600 text-base font-semibold leading-7"
              >
                Maximal Extractable Value (MEV)
              </a>
            </p>
            <p className="mt-3">
              These shady actors pollute our industry and rob profits from
              legitimate traders
            </p>
            <p className="mt-3">
              Anti-MEV code was developed to protect users from these losses
            </p>
          </div>

          <div className=" mt-3 flex flex-row items-center justify-center space-x-4">
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

          <div className="p-3 mt-3 bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
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
                  between transfers from a wallet
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
                  Excludes a frequently updated list of known MEV attack bots
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
                  No buy or sell taxes - no pre-sale - no bogus marketing wallet
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

          <div className="p-3 mt-3 w-fit bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <p className="">
              At it&apos;s best, blockchain can provide cryptographic gaurantees and provably fair results
            </p>

            <p className="mt-3">
              The Lottery above is a
              <a
                href="https://vrf.chain.link/"
                className="text-sky-800 hover:text-sky-600 text-base font-semibold leading-7"
              >
                {" "}
                verifyably fair
              </a>
              , totally{" "}
              <a
                href="https://automation.chain.link/"
                className="text-sky-800 hover:text-sky-600 text-base font-semibold leading-7"
              >
                automated{" "}
              </a>
              contract that picks a weekly winner
            </p>

            <p className="mt-3">
              <a
                href="https://www.dextools.io/app/en/pairs"
                className="text-sky-800 hover:text-sky-600 text-base font-semibold leading-7"
              >
                Anti-MEV{" "}
              </a>
              uses open source code from{" "}
              <a
                href="https://www.openzeppelin.com/"
                className="text-sky-800 hover:text-sky-600 text-base font-semibold leading-7"
              >
                Openzeppelin{" "}
              </a>
              and AI generated art from{" "}
              <a
                href="https://discord.gg/midjourney"
                className="text-sky-800 hover:text-sky-600 text-base font-semibold leading-7"
              >
                Midjourney{" "}
              </a>
            </p>
          </div>

          <div className="m-3 flex flex-row items-center justify-center">
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
