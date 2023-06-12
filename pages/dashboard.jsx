import Banner from '../components/Banner'
import Pict from '../public/pict.png'
import TryoutCard from '../components/TryoutCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import getBaseUrl from '@/utils/getBaseUrl'
import Navbar from '@/components/Navbar'

export default function Dashboard({ data }) {
  const [tryouts, setTryouts] = useState([])
  const baseUrl = getBaseUrl()

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseUrl}/api/tryouts`
    }).then(res => {  
      console.log(res.data)
      setTryouts(res.data)
    }).catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <>
      <Navbar isLoggedIn={data.isLoggedIn} />
      <div className='w-full min-h-screen pt-28'>
        <Banner />
        <div className='w-full px-6 md:px-28 pt-8 md:pt-16'>
          <h1 className='text-white'>Tryout Terbaru</h1>
        </div>
        <div className='w-full px-10 md:px-28 py-8 pb-20'>
          {tryouts?.length == 0 ? (
            <div className='flex w-full justify-center text-center py-2'>
              <p>Belum ada tryout yang terdaftar</p>
            </div>
          ) : (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-auto place-items-center gap-3 md:gap-5'>
              {
                tryouts.map((tryout, index) => <TryoutCard key={tryout._id} pict={Pict} nama={tryout.nama} harga={tryout.harga} href={"/purchase/"+tryout._id} />)
              }
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const data = {
    "isLoggedIn": req.session.isLoggedIn
  }

  return {
    props: { data }
  }
}