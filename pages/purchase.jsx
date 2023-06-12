import React, { useState } from 'react'
import Link from 'next/link'
import PaymentMethod from '@/components/PaymentMethod'
import PriceCard from '@/components/PriceCard'
import ProductCard from '@/components/ProductCard'
import Navbar from '@/components/Navbar'

export default function Purchase({ data }) {
    const dataProduk = {id:1, name:'Tryout #2 SNBT', desc:'Lorem ipsum dolor sit amet consectetur. Viverra ultricies ultricies hendrerit metus orci. Id ipsum in fames vitae euismod gravida tortor pulvinar condimentum. Turpis nisi interdum nisl ullamcorper. Enim arcu eget nisl sed adipiscing scelerisque duis. Mauris consequat leo sociis et tempus. Dui nibh vehicula eros sit proin. Et nisl egestas sagittis dignissim eros odio amet. Magna vitae eget nisl ornare scelerisque pulvinar lorem posuere. Pharetra cursus sit integer sit.', harga:20000}

    const subTotal = data.tryout.harga

    const [payment, setPayment] = useState('')

    const handlePayment = (newPayment) => {
        setPayment(newPayment)
    }

  return (
    <>
        <Navbar isLoggedIn={data.isLoggedIn} />
        <div className='w-full px-10 md:px-28 pt-28 md:pt-8 pb-20'>
            <h1 className='text-white'>Pembelian</h1>
            <div className='md:grid grid-cols-3 gap-8 w-full py-5 md:py-8'>
                <div className='col-start-1 col-end-3'>
                    <ProductCard nama={data.tryout.nama} harga={data.tryout.harga} desc={"Lorem ipsum dolor sit amet consectetur."} />
                    <div className='md:hidden mt-4'>
                        <PaymentMethod handle={handlePayment} />
                    </div>
                    <PriceCard data={data.tryout} subTotal={subTotal} />
                    <form method='post' action="/control/payment">
                        <input 
                            type="hidden" 
                            name="method" 
                            value={payment}
                            />
                        <button className='bg-white font-bold text-primary flex items-center justify-center w-full h-fit p-3 text-sm md:text-base rounded-lg shadow-md hover:bg-blue-100 transition-all duration-100'>
                            Bayar Sekarang
                        </button>
                    </form>
                </div>
                <div className='hidden md:flex h-fit'>
                    <PaymentMethod handle={handlePayment} />
                </div>
            </div>
        </div>
    </>
  )
}

export const getServerSideProps = ({ req, res }) => {
    const data = {
        "tryout": req.session.tryout,
        "isLoggedIn": req.session.isLoggedIn
    }

    return {
        props: { data }
    }
}