import React, { useState, useEffect } from 'react'

const TimerCard = ({ waktu }) => {
  const [timeLeft, setTimeLeft] = useState(waktu * 60 * 60) //waktu dijadikan detik, misal data waktu dalam jam

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return (
    <div className='w-28 md:w-full p-2 md:p-5 bg-white rounded-lg shadow-md'>
        <p className='hidden md:flex w-full font-bold'>Sisa Waktu Pengerjaan</p>
        <p className='w-full md:w-full font-bold text-lg md:text-3xl flex justify-center md:mt-3'>{hours}:{minutes}:{seconds}</p>
    </div>
  )
}

export default TimerCard