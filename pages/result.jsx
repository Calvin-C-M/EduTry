import Link from 'next/link'
import React, {useState} from 'react'
import Score from '@/components/Score'
import Rank from '@/components/Rank'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SquareIcon from '@mui/icons-material/Square'
import { Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import Navbar from '@/components/Navbar'

Chart.register(CategoryScale)

export default function Result({ data }) {
    console.log(data.statistik)

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

    const dataStat = {
        id:1, benar:504, salah:424, kosong:327,
    }

    const dataChart = {
        datasets: [{
            label: 'Total',
            data: [dataStat.benar, dataStat.salah, dataStat.kosong],
            backgroundColor: [
                'rgb(94, 187, 75)',
                'rgb(218, 68, 68)',
                'rgb(85, 132, 176)'
            ],
            hoverOffset: 4
        }]
    }

  return (
    <>
        <Navbar isLoggedIn={data.isLoggedIn} />
        <div className='w-full px-10 md:px-28 py-28'>
            <div className='flex items-center text-white'>
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
                    <Score name={'TPS'} data={data.statistik.filter(obj => obj.jenis == "TPS")} />
                    <Score name={'Literasi & PNM'} data={data.statistik.filter(obj => obj.jenis == "LNM")} />
                </div>
            ) : (
                <div>
                    <div className='w-full my-3'>
                        <h1 className='flex justify-center w-full text-white'>Statistik</h1>
                        <div className='md:grid md:grid-cols-3 place-items-center gap-5 w-full h-[475px] md:h-[512px] bg-white px-10 pt-5 pb-40 md:py-12 my-8 rounded-md'>
                            <div>
                                <div className='flex items-center mx-2 md:mx-5 mt-3 md:my-3'>
                                    <SquareIcon className='text-green' fontSize='large' />
                                    <p className='px-1 md:px-3'>Benar <span className='font-medium'>{dataStat.benar}</span></p>
                                </div>
                                <div className='flex items-center mx-2 md:mx-5 mt-3 md:my-3'>
                                    <SquareIcon className='text-red' fontSize='large' />
                                    <p className='px-1 md:px-3'>Salah <span className='font-medium'>{dataStat.salah}</span></p>
                                </div>
                                <div className='flex items-center mx-2 md:mx-5 mt-3 md:my-3'>
                                    <SquareIcon className='text-blue-dark' fontSize='large' />
                                    <p className='px-1 md:px-3'>Tidak Dijawab <span className='font-medium'>{dataStat.kosong}</span></p>
                                </div>
                            </div>
                            <Doughnut data={dataChart} className='w-full md:w-4/5' options={{ maintainAspectRatio: false }} />
                        </div>
                    </div>
                    <Rank data={dataRank} />
                </div>
            )}
        </div>
    </>
  )
}

export const getServerSideProps = ({ req,res }) => {
    const data = {
        "mytryout": req.session.mytryout,
        "statistik": req.session.statistik,
        "isLoggedIn": req.session.isLoggedIn
    }

    return {
        props: { data }
    }
}