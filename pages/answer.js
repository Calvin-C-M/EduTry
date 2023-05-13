import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AnswerCard from '@/components/AnswerCard'
import NumberCard from '@/components/NumberCard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function Answer() {
  const Tryout = 'Tryout #1'
  const subTryout = 'Penalaran Induktif'
  const data = [
    {id:1, judul:'Soal 1', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:[{id:'A', name:'Lorem ipsum dolor sit amet consectetur.', status:true}, {id:'B', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'C', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'D', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'E', name:'Lorem ipsum dolor sit amet consectetur.', status:false}], jawaban:'A', pembahasan:'Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at.', link:'https://www.youtube.com/embed/3PMLwe_C-F0'},
    {id:2, judul:'Soal 2', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:[{id:'A', name:'Lorem ipsum dolor sit amet consectetur.', status:true}, {id:'B', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'C', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'D', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'E', name:'Lorem ipsum dolor sit amet consectetur.', status:false}], jawaban:'D', pembahasan:'Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at.', link:'https://www.youtube.com/embed/3PMLwe_C-F0'},
    {id:3, judul:'Soal 3', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:[{id:'A', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'B', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'C', name:'Lorem ipsum dolor sit amet consectetur.', status:true}, {id:'D', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'E', name:'Lorem ipsum dolor sit amet consectetur.', status:false}], jawaban:'C', pembahasan:'Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at.', link:'https://www.youtube.com/embed/3PMLwe_C-F0'},
    {id:4, judul:'Soal 4', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:[{id:'A', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'B', name:'Lorem ipsum dolor sit amet consectetur.', status:true}, {id:'C', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'D', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'E', name:'Lorem ipsum dolor sit amet consectetur.', status:false}], jawaban:'B', pembahasan:'Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at.', link:'https://www.youtube.com/embed/3PMLwe_C-F0'},
    {id:5, judul:'Soal 5', soal:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', pilihan:[{id:'A', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'B', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'C', name:'Lorem ipsum dolor sit amet consectetur.', status:false}, {id:'D', name:'Lorem ipsum dolor sit amet consectetur.', status:true}, {id:'E', name:'Lorem ipsum dolor sit amet consectetur.', status:false}], jawaban:'E', pembahasan:'Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at.', link:'https://www.youtube.com/embed/3PMLwe_C-F0'},
  ]

  const [index, setIndex] = useState(0)
  const [numCard, setNumCard] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleIndex = (newIndex) => {
    setIndex(newIndex)
  }

  const handleNumCard = () => {
    setNumCard(!numCard)
  }

  useEffect(() => {
    const handleScroll = () => {
      if(scroll < window.scrollY) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='w-full px-10 md:px-28 pt-36 pb-20'>
      <h1 className='text-white'>{Tryout} : {subTryout}</h1>
      <div className='md:grid grid-cols-3 gap-3 w-full py-5 md:py-8'>
        <div className='col-start-1 col-end-3'>
          <AnswerCard allData={data} data={data[index]} index={index} handleIndex={handleIndex} handleNumCard={handleNumCard} />
          <div className={scroll ? 'fixed md:hidden left-1/2 translate-x-[-50%] bottom-[-10%] w-4/5 mt-3 ease-in duration-200' : 'fixed md:hidden left-1/2 translate-x-[-50%] bottom-8 w-4/5 mt-3 ease-in duration-200'}>
            <Link href={''}>
              <button className='bg-primary font-bold text-white flex items-center justify-between w-full h-fit px-3 py-2 text-sm hover:brightness-110 transition-all duration-100'>
                <p>Konsultasi Soal</p>
                <ArrowForwardIosIcon />
              </button>
            </Link>
          </div>
        </div>
        <div className='hidden md:flex'>
          <div className='flex-none w-full'>
            <NumberCard data={data} index={index} handleClick={handleIndex} button={'Konsultasi Soal'} onClick={''} href={''} />
            <Link href={''}>
              <button className='hidden md:flex justify-between w-full h-fit bg-white font-bold text-primary text-center px-5 py-3 mt-2 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-100'>
                <p>Konsultasi Soal</p>
                <ArrowForwardIosIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div onClick={handleNumCard} className={numCard ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/25' : ''} />
      <div className={numCard ? 'md:hidden fixed left-1/2 bottom-0 translate-x-[-50%] translate-y-[-100%] w-[60%]' : 'hidden'}>
        <NumberCard data={data} index={index} handleClick={handleIndex} button={'Konsultasi Soal'} onClick={''} href={''} />
      </div>
    </div>
  )
}
