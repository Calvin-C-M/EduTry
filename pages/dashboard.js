import Banner from '../components/Banner'
import Pict from '../public/pict.png'
import TryoutCard from '../components/TryoutCard'

export default function Dashboard() {
  const tryoutsData = [
    {id:7, nama:"Tryout UTBK #5", harga:20000, pict:Pict, href:""},
    {id:6, nama:"Tryout Mandiri #4", harga:20000, pict:Pict, href:""},
    {id:5, nama:"Tryout Mandiri #3", harga:15000, pict:Pict, href:""},
    {id:4, nama:"Tryout UTBK #4", harga:20000, pict:Pict, href:""},
    {id:3, nama:"Tryout UTBK #3", harga:20000, pict:Pict, href:""},
    {id:2, nama:"Tryout UTBK #2", harga:15000, pict:Pict, href:""},
    {id:1, nama:"Tryout Mandiri #2", harga:15000, pict:Pict, href:""},
  ]

  return (
    <div className='w-full min-h-screen'>
      <Banner />
      <div className='w-full px-10 md:px-28 pt-8 md:pt-16'>
        <h1>Tryout Terbaru</h1>
      </div>
      <div className='w-full px-10 md:px-28 py-8 pb-20'>
        {tryoutsData?.length == 0 ? (
          <div className='flex w-full justify-center text-center py-2'>
            <p>Belum ada tryout yang terdaftar</p>
          </div>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-auto place-items-center gap-3 md:gap-5'>
            {tryoutsData.map(data => <TryoutCard key={data.id} pict={data.pict} nama={data.nama} harga={data.harga} href={data.href} />)}
          </div>
        )}
      </div>
    </div>
  )
}