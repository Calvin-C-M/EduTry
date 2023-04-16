import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='bg-white text-black w-full px-10 md:px-16 pt-3 md:pt-8 pb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-between'>
            <div>
                <div className='mt-3 mb-6'>
                    <h2>Hubungi Kami</h2>
                </div>
                <div>
                    <p>Jln. Kadipaten Raya 4-6, Bandung, Indonesia</p>
                    <p>edutry@mail.co.id</p>
                    <p>+628123456789</p>
                </div>
            </div>
            <div className='flex md:justify-end items-end'>
                <Link href='/'>
                    <Image src='./instagram.svg' alt='Instagram Logo' width={30} height={30} className='mx-2' />
                </Link>
                <Link href='/'>
                    <Image src='./twitter.svg' alt='Twitter Logo' width={30} height={30} className='mx-2' />
                </Link>
                <Link href='/'>
                    <Image src='./linkedin.svg' alt='LinkedIn Logo' width={30} height={30} className='mx-2' />
                </Link>
                <Link href='/'>
                    <Image src='./facebook.svg' alt='Facebook Logo' width={30} height={30} className='mx-2' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact