import Head from 'next/document'
import Navbar from '../components/Navbar'
import Tryouts from '../components/Tryouts'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div>
        <div class="w-full px-10 md:px-28 pt-28">
          <h1>Tryout Terbaru</h1>
        </div>
      </div>
      <Tryouts />
    </div>
  )
}