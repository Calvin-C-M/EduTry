import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const router = useRouter();

  const handleNav = () => {
      setNav(!nav)
  }

  return (
    <div className='fixed w-full h-20 px-10 md:px-16 shadow-md bg-white'>
        <div className='flex justify-between items-center h-full'>
            <Link href=''>
                <Image src='./edutry.svg' alt='edutry logo' width={96} height={37} />
            </Link>
            <div className='hidden md:flex items-center'>
                <ul className='flex items-center font-medium text-gray-dark mx-3'>
                    <Link href='#about' className='flex-none py-1 mx-7'>
                        <li className={router.asPath == '/' || router.asPath == '/#about' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Tentang Edutry</li>
                    </Link>
                    <Link href='#features' className='py-1 mx-7'>
                        <li className={router.asPath == '/#features' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Fitur</li>
                    </Link>
                    <Link href='#contact' className='py-1 mx-7'>
                        <li className={router.asPath == '/#contact' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Kontak</li>
                    </Link>
                    <div className='flex-none'>
                        <button className='bg-blue-light px-7 py-[6px] ml-2 font-medium text-primary'>
                            <Link href='/'>
                                Login
                            </Link>
                        </button>
                        <button className='bg-blue-light px-7 py-[6px] ml-2 font-medium text-primary'>
                            <Link href='/'>
                                Sign Up
                            </Link>
                        </button>
                    </div>
                </ul>
            </div>
            <div onClick={handleNav} className='md:hidden'>
                <MenuIcon className='text-primary hover:cursor-pointer' />
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/25' : ''}>
            <div className={nav ? 'fixed right-0 top-0 w-[60%] sm:w-[50%] md:w-[35%] h-screen bg-white p-4 ease-in duration-500' : 'fixed right-[-100%] top-0 w-[60%] h-screen p-4 ease-in duration-500'}>
                <div className='flex items-center justify-end'>
                    <div onClick={handleNav} className='w-10 h-10 flex items-center justify-center rounded-full'>
                        <CloseIcon className='text-primary hover:cursor-pointer' />
                    </div>
                </div>
                <div className='flex justify-end m-5'>
                    <ul className='font-medium text-gray-dark'>
                        <Link href='#about' className='flex justify-end py-5'>
                            <li className={router.asPath == '/' || router.asPath == '/#about' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Tentang Edutry</li>
                        </Link>
                        <Link href='#features' className='flex justify-end py-5'>
                            <li className={router.asPath == '/#features' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Fitur</li>
                        </Link>
                        <Link href='#contact' className='flex justify-end py-5'>
                            <li className={router.asPath == '/#contact' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Kontak</li>
                        </Link>
                        <Link href='/' className='flex justify-end pt-3'>
                            <button className='bg-blue-light px-7 py-[6px] font-medium text-primary'>Login</button>
                        </Link>
                        <Link href='/' className='flex justify-end pt-3'>
                            <button className='bg-blue-light px-7 py-[6px] font-medium text-primary'>Sign Up</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar