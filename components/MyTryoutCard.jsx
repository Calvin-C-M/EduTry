import React from 'react'
import Link from 'next/link'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const MyTryoutCard = ({ tanggal, bulan, tahun, deadline, nama, tim, href }) => {
  return (
    <div className='flex w-full h-full items-center bg-blue-dark'>
        <div className='flex-none w-36 min-h-36 bg-blue-light m-5 py-6 px-2'>
            <span className='flex justify-center font-bold text-5xl md:text-6xl text-primary'>{tanggal}</span>
            <span className='flex justify-center text-center font-medium text-base md:text-lg text-primary pt-2'>{bulan} {tahun}</span>
        </div>
        <div className='w-full h-fit py-4 pr-5 text-white'>
            <Link href={href} className='flex w-full h-full pb-2'>
                <span className='font-medium text-xl md:text-2xl'>{nama}</span>
            </Link>
            <div className='flex items-center py-1'>
                <GroupsOutlinedIcon className='text-base md:text-medium' />
                <p className='font-light ml-2'>{tim}</p>
            </div>
            <div className='flex items-center pt-1'>
                <CalendarMonthOutlinedIcon className='text-base md:text-medium' />
                <p className='font-light ml-2'>Batas Pengerjaan {deadline}</p>
            </div>
        </div>
    </div>
  )
}

export default MyTryoutCard