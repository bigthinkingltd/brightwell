import Header from './header'
import Boxes from './boxes'
import Head from 'next/head'

export default function HomePage() {
    return (
      <>
      <Head>
        <title>Brightwell Academy</title>
      </Head>
      <main className="min-h-screen overflow-hidden">
        <Header />
        <Boxes />
      </main>
      </>
    )
  }
  