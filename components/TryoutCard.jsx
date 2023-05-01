import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Tryouts = ({ id, pict, nama, harga, href }) => {
  return (
    <div key={id} className='flex flex-col bg-white w-full h-full rounded-lg overflow-hidden border border-primary shadow-lg'>
        <Link href={href}>
            <Image className='w-full' src={pict} alt='Tryout' />
        </Link>
        <div className='px-4 md:px-5 py-2'>
            <Link href={href}>
                <p className='text-lg md:text-xl font-bold mb-1'>{nama}</p>
            </Link>
            <p className='text-gray-dark text-base'>Rp. {harga}</p>
        </div>
        <Link href={href} className='flex items-end grow px-4 md:px-5 pt-2 pb-4'>
            <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
        </Link>
    </div>
  )
}

export default Tryouts