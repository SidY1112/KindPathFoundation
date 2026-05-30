import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import HowItWorks from './components/HowItWorks'
import Initiatives from './components/Initiatives'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <HowItWorks />
        <Initiatives />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
