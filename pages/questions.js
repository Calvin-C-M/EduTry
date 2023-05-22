import { useState, useEffect } from 'react'
import QuestionCard from '@/components/QuestionCard'
import TimerCard from '@/components/TimerCard'
import NumberCard from '@/components/NumberCard'

export default function Questions({ data }) {
  const soal = data.soal
  console.log(soal)

  const Tryout = data.tryout.nama
  const subTryout = data.tryout.subtryout[0].nama
  const waktu = data.tryout.subtryout[0].waktu_pengerjaan / 60

  const [dataSoal, setDataSoal] = useState(soal)
  const [index, setIndex] = useState(0)
  const [select, setSelect] = useState(dataSoal[index].jawaban)
  const [numCard, setNumCard] = useState(false)
  const [timeLeft, setTimeLeft] = useState(waktu * 60 * 60) //waktu dijadikan detik, misal data waktu dalam jam

  const handleSelect = (newSelect) => {
    setSelect(newSelect)
  }

  const handleClick = (newIndex, jawaban) => {
    setIndex(newIndex)
    let newData = [...dataSoal]
    newData[index].jawaban = jawaban
    setDataSoal(newData)
    setSelect(dataSoal[newIndex].jawaban)
  }

  const handleNumCard = () => {
    setNumCard(!numCard)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  timeLeft == 0 ? (
    setInterval(() => {
      setTimeLeft(0)
    }, 0)
    //submit jawaban
  ) : ('')

  let noSoal = 0

  return (
    <div className='w-full px-10 md:px-28 pt-3 md:pt-8 pb-20'>
      <h1 className='text-white'>{Tryout} : {subTryout}</h1>
      <div className='flex md:hidden justify-end w-full pt-5 pb-3'>
        <TimerCard waktu={waktu} />
      </div>
      <div className='md:grid grid-cols-3 gap-3 w-full md:py-8'>
        <div className='col-start-1 col-end-3'>
          <QuestionCard allData={dataSoal} noSoal={++noSoal} data={dataSoal[index]} index={index} select={select} handleSelect={handleSelect} handleClick={handleClick} handleNumCard={handleNumCard} setData={setDataSoal} />
        </div>
        <div className='hidden md:flex'>
          <div className='flex-none w-full'>
            <TimerCard timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
            <NumberCard data={dataSoal} index={index} select={select} handleClick={handleClick} button={'Submit Jawaban'} onClick={''} href={''} />
            <button onClick={''} className='hidden md:flex justify-center w-full h-fit bg-white font-bold text-primary text-center p-3 mt-2 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-100'>Submit Jawaban</button>
          </div>
        </div>
      </div>
      <div onClick={handleNumCard} className={numCard ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/25' : ''} />
      <div className={numCard ? 'md:hidden fixed left-1/2 bottom-0 translate-x-[-50%] translate-y-[-100%] w-[60%]' : 'hidden'}>
        <NumberCard data={dataSoal} index={index} handleClick={handleClick} button={'Submit Jawaban'} onClick={''} href={''} />
      </div>
    </div>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const data = {
    "tryout": req.session.tryout,
    "soal": req.session.soal
  }

  return {
    props: { data }
  }
}