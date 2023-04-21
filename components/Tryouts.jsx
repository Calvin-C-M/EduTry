import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pict from '../public/pict.png'

const Tryouts = () => {
  return (
    <div className='w-full px-10 md:px-28 py-8'>
        <div className='grid grid-cols-3 md:grid-cols-5 place-items-center gap-3 md:gap-5'>
            <div className='bg-white w-full rounded-lg overflow-hidden shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout #1</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='bg-white w-full rounded-lg overflow-hidden shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout #1</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='bg-white w-full rounded-lg overflow-hidden shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout #1</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='bg-white w-full rounded-lg overflow-hidden shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout #1</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='bg-white w-full rounded-lg overflow-hidden shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout #1</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='bg-white w-full rounded-lg overflow-hidden shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout #1</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
            <div className='bg-white w-full rounded-lg overflow-hidden shadow-lg'>
                <Link href='/'>
                    <Image className='w-full' src={Pict} alt='Tryout' />
                </Link>
                <div className='px-4 md:px-5 py-2'>
                    <Link href='/'>
                        <p className='text-lg md:text-xl font-bold mb-1'>Tryout #1</p>
                    </Link>
                    <p className='text-gray-dark text-base'>Rp 20.000</p>
                </div>
                <Link href='/' className='flex px-4 md:px-5 pt-2 pb-4'>
                    <button className='w-full h-8 bg-primary font-medium text-white rounded-full'>Beli</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Tryouts