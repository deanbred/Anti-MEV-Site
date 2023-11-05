import Image from "next/image"
import styles from "@/styles/Home.module.css"

export default function Header() {
  return (
    <nav className="z-10 font-head font-bold flex flex-row justify-center sticky top-0 bg-gradient-to-r from-[#141515] to-[#020203] border-b-2 overflow-hidden">
      {
        <h2 className="">
          <Image src="logo7.jpg" width={290} height={100} alt="Logo"></Image>
        </h2>
      }
{/*       <div className={styles.icon}>
        <Image src="icon.png" width={64} height={75} alt="Logo"></Image>
      </div> */}
    </nav>
  )
}
