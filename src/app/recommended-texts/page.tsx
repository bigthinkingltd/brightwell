//Will be used to render intro section and the gallary section


import Gallery from './components/Gallery';
import IntroSection from './components/IntroSection';

export default function RecommendedTextsPage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll bg-white">
      <IntroSection />
      <Gallery />
    </main>
  )
}