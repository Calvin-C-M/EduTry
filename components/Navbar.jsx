import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../public/edutry.svg'
import Profile from '../public/profile.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const router = useRouter();

  const handleNav = () => {
      setNav(!nav)
  }

  return (
    <div className='fixed w-full h-20 px-10 md:px-16 shadow-md bg-white'>
        <div className='flex justify-between items-center h-full'>
            <div className='flex justify-between items-center'>
                <Link href=''>
                    <Image src={Logo} alt='edutry logo' className='w-[96px] h-[37px]' />
                </Link>
                <form className='hidden md:hidden w-96 px-8'>
                    <div className='relative w-full'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <SearchIcon className='text-gray-dark' />
                        </div>
                        <input type='search' placeholder='Search' className='w-full pl-10 pr-4 py-2 text-gray-dark border border-gray rounded-lg bg-white outline-none focus:border-blue-dark' />
                    </div>
                </form>
            </div>
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
                        <Link href='/'>
                            <button className='bg-blue-light px-7 py-[6px] ml-2 font-medium text-primary'>Login</button>
                        </Link>
                        <Link href='/'>
                            <button className='bg-blue-light px-7 py-[6px] ml-2 font-medium text-primary'>Sign Up</button>
                        </Link>
                    </div>
                </ul>
            </div>
            <div className='hidden md:hidden items-center'>
                <ul className='flex items-center font-medium text-gray-dark mx-3'>
                    <Link href='/dashboard' className='py-1 mx-7'>
                        <li className={router.asPath == '/dashboard' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Dashboard</li>
                    </Link>
                    <Link href='/tryouts' className='py-1 mx-7'>
                        <li className={router.asPath == '/tryouts' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Paket TO</li>
                    </Link>
                    <Link href='/my-tryouts' className='py-1 mx-7'>
                        <li className={router.asPath == '/my-tryouts' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>My Tryout</li>
                    </Link>
                    <div className='flex-none pl-6'>
                        <Link href='/profile'>
                            <Image src={Profile} alt='Profile Picture' className='w-12 h-12 rounded-full' />
                        </Link>
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
                <div className='hidden justify-end m-5'>
                    <form className='w-full'>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                <SearchIcon className='text-gray-dark' />
                            </div>
                            <input type='search' placeholder='Search' className='w-full pl-10 pr-4 py-2 text-gray-dark border border-gray rounded-lg bg-white outline-none focus:border-blue-dark' />
                        </div>
                    </form>
                    <ul className='font-medium text-gray-dark m-5'>
                        <Link href='/dashboard' className='flex justify-end py-5'>
                            <li className={router.asPath == '/dashboard' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Dashboard</li>
                        </Link>
                        <Link href='/tryouts' className='flex justify-end py-5'>
                            <li className={router.asPath == '/tryouts' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>Paket TO</li>
                        </Link>
                        <Link href='/my-tryouts' className='flex justify-end py-5'>
                            <li className={router.asPath == '/my-tryouts' ? 'hover:border-b-2  border-solid border-primary text-primary' : 'hover:border-b-2  border-solid border-primary hover:text-primary'}>My Tryout</li>
                        </Link>
                    </ul>
                    <div className='flex justify-end'>
                        <Link href='/profile' className='flex items-center w-fit p-1 mt-8 text-gray-dark border-2 border-gray rounded-full bg-white outline-none hover:bg-blue-dark/30 hover:border-primary hover:text-primary'>
                            <p className='font-medium px-4'>Profile</p>
                            <Image src={Profile} alt='Profile Picture' className='w-9 h-9 rounded-full' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar