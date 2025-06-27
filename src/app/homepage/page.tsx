import Header from './header'
import Boxes from './boxes'

export default function HomePage() {
    return (
      <main className="min-h-screen overflow-hidden bg-[url('/websitebackground.jpg')] bg-cover bg-center bg-no-repeat">
        <Header />
        <Boxes />
      </main>
    )
  }
  