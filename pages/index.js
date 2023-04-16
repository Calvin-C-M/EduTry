import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Features from '../components/Features'
import Review from '../components/Review'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>EduTry</title>
          <link rel="icon" href="/" />
      </Head>
      <Navbar />
      <About />
      <Features />
      <Review />
      <Contact />
    </div>
  )
}