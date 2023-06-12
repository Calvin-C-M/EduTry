import About from '../components/About'
import Features from '../components/Features'
import Review from '../components/Review'
import Contact from '../components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='pt-28'>
        <About />
        <Features />
        <Review />
        <Contact />
      </div>
    </>
  )
}