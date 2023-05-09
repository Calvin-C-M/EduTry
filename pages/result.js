import Link from 'next/link'
import React, {useState} from 'react'
import Score from '@/components/Score'
import Rank from '@/components/Rank'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Result() {
    const [status, setStatus] = useState(true)

    const dataTPS = [
        {id:1, nama:'Penalaran Induktif', benar:15, salah:5, kosong:0, score:256},
        {id:2, nama:'Penalaran Kuantitatif', benar:15, salah:5, kosong:0, score:256},
        {id:3, nama:'Penalaran Deduktif', benar:15, salah:5, kosong:0, score:256},
        {id:4, nama:'Kemampuan Memahami Bacaan dan Tulisan', benar:15, salah:5, kosong:0, score:256},
        {id:5, nama:'Pengetahuan dan Penalaran Umum', benar:15, salah:5, kosong:0, score:256},
        {id:6, nama:'Pengetahuan Kuantitatif', benar:15, salah:5, kosong:0, score:256},
    ]

    const dataLPNM = [
        {id:1, nama:'Literasi dalam Bahasa Indonesia', benar:15, salah:5, kosong:0, score:256},
        {id:2, nama:'Literasi dalam Bahasa Inggris', benar:15, salah:5, kosong:0, score:256},
        {id:3, nama:'Penalaran Matematika', benar:15, salah:5, kosong:0, score:256},
    ]

    const dataRank = [
        {id:1, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
        {id:2, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
        {id:3, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
        {id:4, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
        {id:5, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
        {id:6, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
        {id:7, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
        {id:8, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
        {id:9, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
        {id:10, nama:'John Doe', pilihan:'Farmasi', asal:'Bandung', nilai:560},
    ]

  return (
    <div className='w-full px-10 md:px-28 py-28'>
        <div className='flex items-center text-primary'>
            <Link href='/' className='p-2 mr-3'>
                <ArrowBackIosNewIcon />
            </Link>
            <h1>Hasil Tryout</h1>
        </div>
        <div className='flex w-full justify-center px-0 md:px-10 py-5 md:py-8'>
            <div className='w-fit h-fit bg-white p-4 rounded-xl'>
                <button onClick={()=>setStatus(true)} className={status ? 'bg-blue-dark font-medium text-white w-24 h-fit p-2 mr-3 rounded-xl' : 'bg-blue text-primary w-24 h-fit p-2 mr-3 rounded-xl'}>Nilai</button>
                <button onClick={()=>setStatus(false)} className={status ? 'bg-blue text-primary w-24 h-fit p-2 rounded-xl' : 'bg-blue-dark font-medium text-white w-24 h-fit p-2 rounded-xl'}>Ranking</button>
            </div>
        </div>

        {status ? (
            <div className='w-full bg-white px-5 md:px-10 py-3 md:py-5 my-3 rounded-lg shadow-md'>
                <Score name={'TPS'} data={dataTPS} />
                <Score name={'Literasi & PNM'} data={dataLPNM} />
            </div>
        ) : (
            <div>
                <Rank data={dataRank} />
            </div>
        )}
    </div>
  )
}