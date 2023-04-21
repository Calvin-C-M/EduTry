import Navbar from '../components/Navbar'
import About from '../components/About'
import Features from '../components/Features'
import Review from '../components/Review'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Features />
      <Review />
      <Contact />
    </div>
  )
}