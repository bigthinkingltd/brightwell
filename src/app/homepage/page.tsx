import Header from './header'
import Boxes from './boxes'
import Link from 'next/link';


export default function HomePage() {
    return (
      <main className="min-h-screen overflow-hidden bg-[#f5f0e6]">
        <Header />
        <Boxes />
      </main>
    )
  }
  