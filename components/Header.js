import Image from "next/image"

export default function Header() {
  return (
    <nav className="z-10 font-head font-bold flex flex-row justify-center sticky top-0 bg-gradient-to-r from-[#141515] to-[#020203] border-b-2 overflow-hidden">
      {
        <h2 className="pl-4 ml-auto my-auto text-[#ea1d24] lg:text-5xl md:text-4xl sm:text-3xl text-3xl">
          <Image src="logo7.jpg" width={320} height={100} alt="Logo"></Image>
        </h2>
      }
      <div className="p-2 ml-auto">
        <Image src="icon.png" width={64} height={75} alt="Logo"></Image>
      </div>
    </nav>
  )
}
