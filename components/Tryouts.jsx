import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pict from '../public/pict.png'

const Tryouts = () => {
  return (
    <div className='w-full px-10 md:px-28 py-8 pb-20'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-auto place-items-center gap-3 md:gap-5'>
            <div className='flex flex-col bg-white w-full h-full rounded-lg overflow-hidden border border-primary shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout UTBK #5</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex items-end grow px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='flex flex-col bg-white w-full h-full rounded-lg overflow-hidden border border-primary shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout Mandiri #4</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex items-end grow px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='flex flex-col bg-white w-full h-full rounded-lg overflow-hidden border border-primary shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout Mandiri #3</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 15.000</p>
                </div>
                <Link href='/' className='flex items-end grow px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='flex flex-col bg-white w-full h-full rounded-lg overflow-hidden border border-primary shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout UTBK #4</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex items-end grow px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='flex flex-col bg-white w-full h-full rounded-lg overflow-hidden border border-primary shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout UTBK #3</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex items-end grow px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='flex flex-col bg-white w-full h-full rounded-lg overflow-hidden border border-primary shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout UTBK #2</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 15.000</p>
                </div>
                <Link href='/' className='flex items-end grow px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='flex flex-col bg-white w-full h-full rounded-lg overflow-hidden border border-primary shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout Mandiri #2</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 15.000</p>
                </div>
                <Link href='/' className='flex items-end grow px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Tryouts