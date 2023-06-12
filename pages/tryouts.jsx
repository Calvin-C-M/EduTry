import Pict from '../public/pict.png'
import TryoutCard from '../components/TryoutCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import getBaseUrl from '@/utils/getBaseUrl'
import Navbar from '@/components/Navbar'

export default function Tryouts({ data }) {
  const tryoutsData = [
    {id:7, nama:"Tryout UTBK #5", harga:20000, pict:Pict, href:""},
    {id:6, nama:"Tryout Mandiri #4", harga:20000, pict:Pict, href:""},
    {id:5, nama:"Tryout Mandiri #3", harga:15000, pict:Pict, href:""},
    {id:4, nama:"Tryout UTBK #4", harga:20000, pict:Pict, href:""},
    {id:3, nama:"Tryout UTBK #3", harga:20000, pict:Pict, href:""},
    {id:2, nama:"Tryout UTBK #2", harga:15000, pict:Pict, href:""},
    {id:1, nama:"Tryout Mandiri #2", harga:15000, pict:Pict, href:""},
  ]

  const [tryouts, setTryouts] = useState([])
  const baseUrl = getBaseUrl()

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseUrl}/api/tryouts`
    }).then(res => {
      setTryouts(res.data)
    }).catch(err => {
      console.error(err)
    })
  },[])
  
  return (
    <>
      <Navbar isLoggedIn={data.isLoggedIn} />
      <div className='w-full min-h-screen'>
        <div className='w-full px-10 md:px-28 pt-28'>
          <h1 className='text-white'>Paket Tryout</h1>
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