import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Head from "next/head"
import Header from "@/components/Header"
import { SocialIcon } from "react-social-icons"
import "lightbox.js-react/dist/index.css"
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react"
import React, { useEffect, Component } from "react"
import { pushRotate as Menu } from "react-burger-menu"

const images = [
  { src: "/images/img10.jpg" },
  { src: "/images/img11.jpg" },
  { src: "/images/img12.jpg" },
  { src: "/images/img13.jpg" },
  { src: "/images/img00.jpg" },
  { src: "/images/img01.jpg" },
  { src: "/images/img02.jpg" },
  { src: "/images/img04.jpg" },
  { src: "/images/img06.jpg" },
  { src: "/images/last.jpeg" },
  { src: "/images/img08.jpg" },
  { src: "/images/img05.jpg" },
  { src: "/images/img09.png" },
]

var style = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "36px",
    left: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "#ea1d24",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#61666b",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export default function Home() {
  async function updateUIValues() {}

  useEffect(() => {
    initLightboxJS("DF8A-D560-5C71-E585", "Individual")
  }, [])

  return (
    <>
      <Head>
        <title>Anti-MEV</title>
        <meta name="description" content="Anti-MEV Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.jpg" />
      </Head>
      <Header />

      <div id="outer-container" className="font-kake font-semibold">
        <Menu
          styles={style}
          left
          width={"40%"}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        >
          <a
            id="tg"
            className="menu-item text-slate-900 hover:text-[#ea1d24]"
            href="https://t.me/"
          >
            Telegram
          </a>

          <a
            id="chart"
            className="menu-item text-slate-900 hover:text-[#ea1d24]"
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x6ef6666271df490f8c7d5cd18077662456aa292c"
          >
            DEXTools
          </a>

          <a
            id="contract"
            className="menu-item text-slate-900 hover:text-[#ea1d24]"
            href="https://etherscan.io/token/0x48b8039cF08E1D1524A68fC6d707D1D7e032e90C"
          >
            Contract
          </a>

          <a
            id="twitter"
            className="menu-item text-slate-900 hover:text-[#ea1d24]"
            href="https://twitter.com/Anti_MEV"
          >
            Twitter
          </a>

          <a
            id="tg"
            className="menu-item text-slate-900 hover:text-[#ea1d24]"
            href="https://discord.gg/rD8cZH8mj"
          >
            Discord
          </a>

          <a
            id="email"
            className="menu-item text-slate-900 hover:text-[#ea1d24]"
            href="mailto:support@antimev.io"
          >
            Email
          </a>
        </Menu>

        <main id="page-wrap">
          <div className="flex min-h-screen flex-col overflow-hidden bg-contain bg-[url('../public/bg-01.jpg')]">
            <div className="p-1 mt-6 m-auto text-center max-w-3xl bg-stone-100 opacity-70 md:text-base sm:text-base rounded-2xl">
              <p className="lg:text-3xl md:text-2xl sm:text-xl text-base">
                <a
                  href="https://etherscan.io/token/0x48b8039cf08e1d1524a68fc6d707d1d7e032e90c"
                  className="text-sky-900 hover:text-[#af292c] leading-7"
                >
                  Anti-MEV
                </a>{" "}
                uses advanced trading bot detection code to prevent MEV bots
                from stealing your profits!
              </p>
            </div>

            <div className="p-1 mt-48 m-auto text-center max-w-3xl bg-stone-100 opacity-70 md:text-base sm:text-base rounded-2xl">
              <p className="lg:text-3xl md:text-2xl sm:text-xl text-base">
                <a
                  href="https://eigenphi.io/"
                  className="text-sky-900 hover:text-[#af292c]"
                >
                  MEV bots
                </a>{" "}
                have extracted $1.4 billion from Ethereum users attacking more
                than 7% of all DEX trades
              </p>
            </div>

            <div className="p-1 mt-4 m-auto text-center max-w-3xl bg-stone-100 opacity-70 md:text-base sm:text-base rounded-2xl">
              <p className="lg:text-3xl md:text-2xl sm:text-xl text-base">
                <a
                  href="https://etherscan.io/token/0x48b8039cf08e1d1524a68fc6d707d1d7e032e90c"
                  className="text-sky-900 hover:text-[#af292c]"
                >
                  Our token
                </a>{" "}
                fights MEV in 3 key ways
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-900 stroke-2">
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="lg:text-3xl md:text-2xl sm:text-xl text-base">
                    {" "}
                    <span className="text-[#af292c]">
                      Sandwich Attacks :
                    </span>{" "}
                    The code requires 3 blocks be mined between 2 transfers from
                    1 wallet
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
                  <p className="lg:text-3xl md:text-2xl sm:text-xl text-base">
                    <span className="text-[#af292c]">Front-Running :</span>{" "}
                    Bribe Detector™ calculates gas fee to expect, and rejects
                    bots who add 20% miner bribe to insert their trade before
                    your trade
                  </p>
                </li>
                <li className="ml-2 flex items-center">
                  <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-900 stroke-2">
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="lg:text-3xl md:text-2xl sm:text-xl text-base">
                    <span className=" text-[#af292c]">Back-Running :</span>{" "}
                    Rolling average gas tracker also effective at fighting bots
                    who use this attack vector
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-4 max-w-3xl flex m-auto">
              <Image
                alt="Performance Chart"
                src="/eigenphi.png"
                width={400}
                height={200}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>

            <div className="p-1 mt-4 m-auto text-center max-w-3xl bg-stone-100 opacity-70 md:text-base sm:text-base rounded-2xl">
              <p className="lg:text-3xl md:text-2xl sm:text-xl text-base">
                <span className=" text-[#af292c]">Anti-whale:</span> Maximum
                wallet size less than 4.9% prevents whales from manipulating
                token price
              </p>
              <p className="lg:text-3xl md:text-2xl sm:text-xl text-base">
                Total supply is Fibonacci Sequence of{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Fibonacci_sequence"
                  className="text-sky-800 hover:text-[#af292c] font-kake font-semibold"
                >
                  1,123,581,321
                </a>
              </p>
              <p className="text-[#af292c] lg:text-3xl md:text-2xl sm:text-xl text-base">
                NO TAXES : NO PRE-SALE : NO VC Bags
              </p>
            </div>

            <div className="mt-4 m-auto">
              <button
                className="p-2 bg-[#ea1d24] hover:bg-[#732423] text-stone-200 rounded-2xl"
                onClick={async () =>
                  window.open(
                    "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x48b8039cF08E1D1524A68fC6d707D1D7e032e90C"
                  )
                }
              >
                Buy on UniSwap
              </button>
            </div>

            <div className="p-1 mt-4 m-auto text-center max-w-3xl bg-stone-100 opacity-70 md:text-base sm:text-base rounded-2xl">
              <div className="flex flex-row items-center justify-center space-x-6">
                <SocialIcon
                  url="https://twitter.com/Anti_MEV"
                  network="twitter"
                  fgColor="white"
                />
                <SocialIcon
                  url="https://discord.gg/rD8cZH8mj"
                  network="discord"
                  fgColor="white"
                />
                <SocialIcon
                  url="https://t.me/AntimevPortal"
                  network="telegram"
                  fgColor="white"
                />
              </div>
            </div>

            <audio className="mt-4 m-auto" id="music" controls autoPlay>
              <source src="" type="audio/mp3" />
            </audio>

            <div className="mt-4 p-1 mx-auto">
              <SlideshowLightbox
                className="container grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 mx-auto"
                lightboxIdentifier="lightbox1"
                framework="next"
                images={images}
              >
                {images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    height={500}
                    width={300}
                    data-lightboxjs="lightbox1"
                    quality={80}
                  />
                ))}
              </SlideshowLightbox>
            </div>

            <div className="p-3 mt-4 m-auto text-center max-w-3xl bg-stone-200 opacity-70 md:text-base sm:text-base rounded-2xl">
              <a
                className=""
                data-theme="light"
                href="https://twitter.com/Anti_MEV?ref_src=twsrc%5Etfw"
              >
                Tweets by
                <span className="text-[#af292c] hover:text-[#234afd]">
                  {" "}
                  @Anti_MEV
                </span>
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
              ></script>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
