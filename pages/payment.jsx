import React from 'react'
import QR from '@/public/qr.png'
import Image from 'next/image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import Link from 'next/link'
import PaymentInstructions from '@/components/PaymentInstructions'
import PaymentCard from '@/components/PaymentCard'
import Navbar from '@/components/Navbar'

export default function Payment({ data }) {
    const dataPayment = {
        status:'pending', waktu:2, method:'mandiri', logo:'https://bankmandiri.co.id/image/layout_set_logo?img_id=31567&t=1683824600225', kode:'sgdfkhewifbnekwlnfel', qr:QR, user:'Deani PV', paket:'Tryout #2 SNBT', harga:12000, diskon:7000, admin:4000
    }

    const waktu = 2
    const method = {
        "nama": data.transaksi.method,
        "logo": 'https://bankmandiri.co.id/image/layout_set_logo?img_id=31567&t=1683824600225', 
        "kode": '141704120120',
        "instructions": 'Lorem ipsum dolor sit amet consectetur. Viverra ultricies ultricies hendrerit metus orci. Id ipsum in fames vitae euismod gravida tortor pulvinar condimentum. Turpis nisi interdum nisl ullamcorper. Enim arcu eget nisl sed adipiscing scelerisque duis. Mauris consequat leo sociis et tempus. Dui nibh vehicula eros sit proin. Et nisl egestas sagittis dignissim eros odio amet. Magna vitae eget nisl ornare scelerisque pulvinar lorem posuere. Pharetra cursus sit integer sit.',
        qr: QR
    }

  return (
    <>
        <Navbar isLoggedIn={data.isLoggedIn} />
        <div className='w-full px-10 md:px-28 pt-28 md:pt-6 pb-20'>
            <Link href='/purchase' className='flex items-center text-white p-2'>
                <ArrowBackIosNewIcon className='mr-5' />
                <h1>Pembayaran</h1>
            </Link>
            <div className='md:grid grid-cols-3 gap-8 w-full py-5 md:py-8'>
                <div className='col-start-1 col-end-3'>
                    <PaymentCard user={data.user} tryout={data.tryout} method={method} status={data.transaksi.status} waktu={waktu} />
                    <div className='md:hidden mt-4'>
                        <PaymentInstructions instructions={method.instructions} />
                        <div className='w-full mt-6'>
                            <Image src={QR} alt='QR Code' />
                        </div>
                    </div>
                    <button onClick='' className='bg-white font-bold text-primary flex items-center justify-center w-full h-fit p-3 mt-6 mb-4 text-sm md:text-base rounded-lg shadow-md hover:bg-blue-100 transition-all duration-100'>
                        Batalkan Transaksi
                    </button>
                    <Link href='/upload-payment-proof'>
                        <button className='bg-white font-bold text-primary flex items-center justify-center w-full h-fit p-3 text-sm md:text-base rounded-lg shadow-md hover:bg-blue-100 transition-all duration-100'>
                            Upload Bukti Bayar
                        </button>
                    </Link>
                </div>
                <div className='hidden md:grid h-fit'>
                    <PaymentInstructions instructions={method.instructions} />
                    <div className='w-full mt-6'>
                        <Image 
                            src={QR}
                            width='100%'
                            alt="QR CODE"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export const getServerSideProps = ({ req, res }) => {
    const data = {
        "transaksi": req.session.transaksi,
        "tryout": req.session.tryout,
        "user": req.session.user,
        "isLoggedIn": req.session.isLoggedIn
    }

    return {
        props: { data }
    }
}