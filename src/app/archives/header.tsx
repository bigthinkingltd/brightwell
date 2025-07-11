import Link from "next/link";

export default function Header(){
    return (
      <header className="relative w-full h-20 mt-8">
        <Link href="/homepage">
        <img 
        src="/logo.png"
        alt="Brightwell Academy Logo" 
        className="absolute left-8 top-[55%] transform -translate-y-1/2 w-32 h-auto"
        />
        </Link>
  
        <h1 className="m-0 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-black drop-shadow-md whitespace-nowrap">
          Archives
        </h1>
      </header>
    )
  }