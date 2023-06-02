import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const PaymentCard = ({ method, user, tryout, status, waktu }) => {
    const [timeLeft, setTimeLeft] = useState(waktu * 60 * 60) //waktu dijadikan detik, misal data waktu dalam jam

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const hours = Math.floor(timeLeft / 3600)
    const minutes = Math.floor((timeLeft % 3600) / 60)
    const seconds = timeLeft % 60

    const admin = 4000

  return (
    <div className='w-full bg-white px-4 py-3 md:px-6 md:py-5 rounded-lg shadow-md'>
        <div className='w-full flex justify-between items-center p-3 border-b-2 border-black'>
            <p>Status Pembayaran</p>
            <p className='font-bold'>{status.toUpperCase()}</p>
        </div>
        <div className='w-full flex justify-between items-center p-3 border-b-2 border-black'>
            <div className='flex-none'>
                <p>Sisa Waktu Pembayaran</p>
                <p className='font-bold mt-1 md:mt-2'>{hours}:{minutes}:{seconds}</p>
            </div>
            <Image 
                src={method.logo} 
                alt='Payment Method Logo' 
                className='w-[30%] md:w-32' 
                width={350}
                height={200}
                />
        </div>
        <div className='w-full p-3 border-b-2 border-black'>
            <p className='text-base md:text-lg font-bold'>Pembayaran</p>
            <div className='flex justify-between items-center my-2'>
                <p>Kode Bayar</p>
                <div className='flex items-center'>
                    <p className='font-bold text-base md:text-lg'>{method.kode}</p>
                    <button onClick={() => navigator.clipboard.writeText(method.kode)} className='ml-1'><ContentCopyIcon fontSize='small' /></button>
                </div>
            </div>
            <div className='flex justify-between items-center my-2'>
                <p>Atas Nama</p>
                <p className='font-bold'>{user.nama}</p>
            </div>
        </div>
        <div className='w-full p-3'>
            <p className='text-base md:text-lg font-bold'>Detail Transaksi</p>
            <div className='flex justify-between items-center my-2'>
                <p>Paket</p>
                <p className='font-bold'>{tryout.nama}</p>
            </div>
            <div className='flex justify-between items-center my-2'>
                <p>Harga Paket</p>
                <p>Rp. {tryout.harga}</p>
            </div>
            <div className='flex justify-between items-center my-2'>
                <p>Biaya Admin</p>
                <p>Rp. {admin}</p>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <p>Total Harga</p>
                <p className='font-bold'>Rp. {tryout.harga + admin}</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentCard