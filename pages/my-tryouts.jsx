import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import MyTryoutCard from '@/components/MyTryoutCard'
import axios from 'axios'
import getBaseUrl from '@/utils/getBaseUrl'

export default function MyTryouts({ data }) {
  const myTryouts = [
    {id:1, nama:'Tryout UTBK #1', tanggal:'23', bulan:'Desember', tahun:2022, deadline:'27/12/2023', tim:'Edutry Team', href:''},
    {id:3, nama:'Tryout UTBK #3', tanggal:'28', bulan:'Februari', tahun:2023, deadline:'02/03/2023', tim:'Edutry Team', href:''},
    {id:4, nama:'Tryout UTBK #4', tanggal:'01', bulan:'Maret', tahun:2023, deadline:'05/03/2023', tim:'Edutry Team', href:''},
  ]

  const myTryoutsDone = [
    {id:2, nama:'Tryout UTBK #2', tanggal:'27', bulan:'Februari', tahun:2023, deadline:'01/03/2023', tim:'Edutry Team', href:'/result'},
  ]

  const [mytryouts, setMytryouts] = useState([])
  const [status, setStatus] = useState(true)
  const baseUrl = getBaseUrl()

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${baseUrl}/api/mytryouts/${data.user._id}`
    }).then(res => {
      console.log(res.data)
      setMytryouts(res.data)
    }).catch(err => {
      console.error(err)
    }) 
  },[])

  const getDoneTryouts = () => {
    let done = 0
    for(let tryout of mytryouts) {
      done += (tryout.status == "DONE") ? 1 : 0
    }
    return done
  }

  return (
    <div className='w-full px-6 md:px-28 pt-1 md:pt-6 pb-20'>
      <h1 className='text-white mx-4'>Tryout Saya</h1>
      <div className='flex w-full justify-center px-0 md:px-10 my-6 md:my-8'>
        <div className='w-fit h-fit bg-white p-5 rounded-xl'>
          <Link onClick={()=>setStatus(true)} href='' className={status ? 'bg-blue-dark font-medium text-white w-fit h-fit p-3 mr-3 rounded-xl' : 'bg-blue text-primary w-fit h-fit p-3 mr-3 rounded-xl'}>Belum dikerjakan</Link>
          <Link onClick={()=>setStatus(false)} href='' className={status ? 'bg-blue text-primary w-fit h-fit p-3 rounded-xl' : 'bg-blue-dark font-medium text-white w-fit h-fit p-3 rounded-xl'}>Sudah dikerjakan</Link>
        </div>
      </div>
      <div className='w-full bg-white px-5 md:px-10 py-4 md:py-8 my-1 md:my-3'>
        {status ? (
          mytryouts?.length == 0 ? (
            <div className='flex w-full justify-center text-center py-2'>
              <p>Belum ada tryout yang terdaftar</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-myto place-items-center gap-5 md:gap-7'>
              {mytryouts.map((tryout, index) => {
                if(tryout.status != "DONE") {
                  return(
                    <MyTryoutCard key={tryout._id} nama={tryout.nama} tanggal={tryout.created_at} deadline={tryout.deadline} tim={"EduTry Team"} href={'/intro-tryout/'+tryout._id} />
                  )
                }
              })}
            </div>
          )
        ) : (
          getDoneTryouts() == 0 ? (
            <div className='flex w-full justify-center text-center py-2'>
              <p>Kamu belum menyelesaikan satu tryout pun. Ayo segera selesaikan tryout-mu😊</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-myto place-items-center gap-5 md:gap-7'>
              {mytryouts.map((tryout, index) => {
                if(tryout.status == "DONE") {
                  return(
                    <MyTryoutCard key={tryout._id} nama={tryout.nama} tanggal={tryout.created_at} deadline={tryout.deadline} tim={"EduTry Team"} href={'/intro-tryout/'+tryout._id} />
                  )
                }
              })}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const data = {
    "user": req.session.user
  }

  return {
    props: { data }
  }
}