import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const PaymentCard = ({ data }) => {
    const [timeLeft, setTimeLeft] = useState(data.waktu * 60 * 60) //waktu dijadikan detik, misal data waktu dalam jam

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const hours = Math.floor(timeLeft / 3600)
    const minutes = Math.floor((timeLeft % 3600) / 60)
    const seconds = timeLeft % 60

  return (
    <div className='w-full bg-white px-4 py-3 md:px-6 md:py-5 rounded-lg shadow-md'>
        <div className='w-full flex justify-between items-center p-3 border-b-2 border-black'>
            <p>Status Pembayaran</p>
            <p className='font-bold'>{data.status.toUpperCase()}</p>
        </div>
        <div className='w-full flex justify-between items-center p-3 border-b-2 border-black'>
            <div className='flex-none'>
                <p>Sisa Waktu Pembayaran</p>
                <p className='font-bold mt-1 md:mt-2'>{hours}:{minutes}:{seconds}</p>
            </div>
            <Image src={data.logo} alt='Payment Method Logo' className='w-[30%] md:w-32' />
        </div>
        <div className='w-full p-3 border-b-2 border-black'>
            <p className='text-base md:text-lg font-bold'>Pembayaran</p>
            <div className='flex justify-between items-center my-2'>
                <p>Kode Bayar</p>
                <div className='flex items-center'>
                    <p className='font-bold text-base md:text-lg'>{data.kode}</p>
                    <button onClick={() => navigator.clipboard.writeText(data.kode)} className='ml-1'><ContentCopyIcon fontSize='small' /></button>
                </div>
            </div>
            <div className='flex justify-between items-center my-2'>
                <p>Atas Nama</p>
                <p className='font-bold'>{data.user}</p>
            </div>
        </div>
        <div className='w-full p-3'>
            <p className='text-base md:text-lg font-bold'>Detail Transaksi</p>
            <div className='flex justify-between items-center my-2'>
                <p>Paket</p>
                <p className='font-bold'>{data.paket}</p>
            </div>
            <div className='flex justify-between items-center my-2'>
                <p>Harga Paket</p>
                <p>Rp. {data.harga}</p>
            </div>
            <div className='flex justify-between items-center my-2'>
                <p>Diskon</p>
                <p>-Rp. {data.diskon}</p>
            </div>
            <div className='flex justify-between items-center my-2'>
                <p>Biaya Admin</p>
                <p>Rp. {data.admin}</p>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <p>Total Harga</p>
                <p className='font-bold'>Rp. {data.harga - data.diskon + data.admin}</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentCard