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
        <title>$GMUSSY Token</title>
        <meta name="description" content="Crypto Token Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/clock.png" />
      </Head>
      <Header />
      <div className="bg-cover bg-no-repeat bg-[url('../public/bg.jpeg')]">
        <ContractCalls />
        <main className={styles.main}>
          <div className="">
            <SocialIcon
              url="https://t.me/GMUSSY"
              network="telegram"
              fgColor="white"
            />
            <SocialIcon
              url="https://twitter.com/GMUSSY_TOKEN"
              network="twitter"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.discord.com/"
              network="discord"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.tiktok.com/@gmussy_token"
              network="tiktok"
              fgColor="white"
            />
          </div>
        </main>
      </div>
      <footer className="text-xs">DEV is BASED</footer>
    </>
  )
}
