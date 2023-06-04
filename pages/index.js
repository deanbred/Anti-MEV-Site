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
              <span className="font-semibold">Anti-MEV</span> is a specialized
              crypto token that actively defends itself from MEV theft
            </p>
            <p className="mt-3 text-center">
              Malicious{" "}
              <a
                href="https://eigenphi.io/"
                className="text-sky-800 hover:text-sky-600 font-semibold leading-7"
              >
                MEV bots{" "}
              </a>{" "}
              have extracted over $1.3 billion from Ethereum users
            </p>
            <p className="mt-3 text-center">
              This{" "}
              <span className="font-semibold">&quot;invisible tax&quot;</span>{" "}
              is now known as{" "}
              <a
                href="https://www.coindesk.com/learn/what-is-mev-aka-maximal-extractable-value/"
                className="text-sky-800 hover:text-sky-600 font-semibold leading-7"
              >
                Maximal Extractable Value (MEV)
              </a>{" "}
            </p>
            <p className="mt-3 text-center">
              Our token was developed to{" "}
              <span className="font-semibold underline underline-offset-4">
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
              The <span className="font-semibold">MEV Mafia</span> pollutes our
              industry and robs profits from legitimate traders
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
                  We prevent sandwich attacks by requiring blocks to be mined
                  between 2 transfers from 1 wallet
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
                  Use decentralized sequencing tools to further defend against
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
                  Limit price manipulation by enforcing a Max Wallet size of 3%
                  of supply
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
                  Maintain a carefully curated list of known MEV attack bots
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
                  No buy or sell taxes - no pre-sale - no bogus &quot;marketing
                  wallet&quot;
                </p>
              </li>
            </ul>
          </div>
          <div className="p-3 mt-3 text-center max-w-3xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <p className="">
              At it&apos;s best, blockchain tech can provide cryptographically
              guaranteed agreements and transparent results
            </p>
            <p className="mt-3">
              For example, our lottery is a{" "}
              <a
                href="https://vrf.chain.link/"
                className="text-sky-800 hover:text-sky-600 font-semibold leading-7"
              >
                verifiably random{" "}
              </a>
              and fully{" "}
              <a
                href="https://automation.chain.link/"
                className="text-sky-800 hover:text-sky-600 font-semibold leading-7"
              >
                automated{" "}
              </a>
              smart contract that picks a winner each week
            </p>
            <p className="mt-3">
              Winners are eligible for generous airdrops of $aMEV tokens from
              based dev
            </p>
            <p className="mt-3 underline">
              <span className="underline font-semibold ">
                MEV is theft... Anti-MEV gives back&trade;
              </span>
            </p>
          </div>
          <div className="mt-3 flex flex-col items-center justify-center">
            <ContractCalls className="" />
          </div>
          <div className="p-3 mt-3 max-w-3xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <p className="text-center">
              <a
                href="https://www.dextools.io/app/en/pairs"
                className="text-sky-800 hover:text-sky-600 font-semibold leading-7"
              >
                Anti-MEV{" "}
              </a>{" "}
              is a specialized crypto token that actively defends itself from
              MEV theft
            </p>
            <p className="mt-3 text-center">
              Uses open source code from{" "}
              <a
                href="https://www.openzeppelin.com/"
                className="text-sky-800 hover:text-sky-600 font-semibold leading-7"
              >
                Openzeppelin{" "}
              </a>
              and AI art from{" "}
              <a
                href="https://discord.gg/midjourney"
                className="text-sky-800 hover:text-sky-600 font-semibold leading-7"
              >
                Midjourney{" "}
              </a>
            </p>
            <div className="mt-3 text-base font-semibold">
              <Image
                className="float-right rounded-md shadow-lg"
                src="chainlink_badge.jpeg"
                width={175}
                height={64}
                alt="Logo"
              ></Image>
              <p className="ml-12">Want to dig deeper into Anti-MEV?</p>
              <p className="ml-14">
                <a
                  href="https://github.com/deanbred/Anti-MEV-Token.git"
                  className="text-sky-800 hover:text-sky-600"
                >
                  Read the code &rarr;
                </a>
              </p>
            </div>
          </div>
          <div className="p-3 mt-3 max-w-3xl bg-stone-200 opacity-90 md:text-xl sm:text-base rounded-2xl">
            <a
              className=""
              data-theme="light"
              href="https://twitter.com/Anti_MEV?ref_src=twsrc%5Etfw"
            >
              Tweets by <span className="font-semibold">@Anti-MEV</span>
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
