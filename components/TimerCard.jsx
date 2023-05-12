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
    <div className='w-full p-5 bg-white rounded-lg shadow-md'>
        <p className='w-full font-bold'>Sisa Waktu Pengerjaan</p>
        <h1 className='w-full flex justify-center mt-3'>{hours}:{minutes}:{seconds}</h1>
    </div>
  )
}

export default TimerCard