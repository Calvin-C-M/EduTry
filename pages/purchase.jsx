import React, { useState } from 'react'
import Link from 'next/link'
import PaymentMethod from '@/components/PaymentMethod'
import PriceCard from '@/components/PriceCard'
import ProductCard from '@/components/ProductCard'

export default function Purchase({ data }) {
    const dataProduk = {id:1, name:'Tryout #2 SNBT', desc:'Lorem ipsum dolor sit amet consectetur. Viverra ultricies ultricies hendrerit metus orci. Id ipsum in fames vitae euismod gravida tortor pulvinar condimentum. Turpis nisi interdum nisl ullamcorper. Enim arcu eget nisl sed adipiscing scelerisque duis. Mauris consequat leo sociis et tempus. Dui nibh vehicula eros sit proin. Et nisl egestas sagittis dignissim eros odio amet. Magna vitae eget nisl ornare scelerisque pulvinar lorem posuere. Pharetra cursus sit integer sit.', harga:20000}

    const subTotal = data.harga

    const [payment, setPayment] = useState('')

    const handlePayment = (newPayment) => {
        setPayment(newPayment)
    }

  return (
    <div className='w-full px-10 md:px-28 pt-3 md:pt-8 pb-20'>
        <h1 className='text-white'>Pembelian</h1>
        <div className='md:grid grid-cols-3 gap-8 w-full py-5 md:py-8'>
            <div className='col-start-1 col-end-3'>
                <ProductCard nama={data.nama} harga={data.harga} desc={"Lorem ipsum dolor sit amet consectetur."} />
                <div className='md:hidden mt-4'>
                    <PaymentMethod handle={handlePayment} />
                </div>
                <PriceCard data={data} subTotal={subTotal} />
                <Link href={(payment != '') ? `/payment/${payment}` : "#"}>
                    <button className='bg-white font-bold text-primary flex items-center justify-center w-full h-fit p-3 text-sm md:text-base rounded-lg shadow-md hover:bg-blue-100 transition-all duration-100'>
                        Bayar Sekarang
                    </button>
                </Link>
            </div>
            <div className='hidden md:flex h-fit'>
                <PaymentMethod handle={handlePayment} />
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = ({ req, res }) => {
    const data = req.session.tryout

    return {
        props: { data }
    }
}