import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DiscussPanel from '@/components/DiscussPanel'
import QuestionBox from '@/components/QuestionBox'
import Navbar from '@/components/Navbar';

export default function Discuss({ data }) {
    // const discussData = [
    //     {id:1, username:'Username 1', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', comments:[{id:1, username:'Konselor', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus.'}, {id:2, username:'Username 2', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus.'}]},
    //     {id:1, username:'Username 2', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', comments:[{id:1, username:'Konselor', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus.'}]},
    // ]

    const [modal, setModal] = useState(false)
    const [comment, setComment] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [topikIndex, setTopikIndex] = useState(0)

    const handleModal = () => {
        if (!comment) {
            setModal(!modal)
        }
    }

    const handleComment = (index) => {
        setTopikIndex(index)
        setComment(!comment)
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
    }, [scroll])

  return (
    <>
        <Navbar isLoggedIn={data.isLoggedIn} />
        <div className='w-full px-10 md:px-28 pt-28 md:pt-4 pb-8 md:pb-20'>
            <div className='flex justify-between md:mt-3 mb-3 md:mb-8'>
                <div className='flex items-center text-white'>
                    <Link href='/answer' className='flex items-center p-2'>
                        <ArrowBackIosNewIcon className='mr-5' />
                        <h1>Diskusi {data.discuss.nama}</h1>
                    </Link>
                </div>
                <button onClick={handleModal} className='hidden md:flex bg-white font-bold text-primary items-center justify-center w-fit h-fit px-3 md:px-5 py-2 text-sm md:text-base hover:bg-blue-100 transition-all duration-100'>
                    Tanya Soal
                </button>
            </div>
            {
                data.discuss.discussion.map((d, index) => <DiscussPanel key={index} data={d} handle={() => handleComment(index)} />)
            }
            {/* {discussData.discussion.map((discuss, index) => <DiscussPanel key={index} data={discuss} handle={handleComment} />)} */}
            <div className={scroll ? 'fixed md:hidden left-1/2 translate-x-[-50%] bottom-[-10%] w-4/5 mt-3 ease-in duration-200' : 'fixed md:hidden left-1/2 translate-x-[-50%] bottom-8 w-4/5 mt-3 ease-in duration-200'}>
                <button onClick={handleModal} className='bg-blue-dark font-bold text-white shadow-lg flex items-center justify-center w-full h-fit px-3 md:px-5 py-2 text-sm md:text-base hover:bg-blue-100 transition-all duration-100'>
                    Tanya Soal
                </button>
            </div>
        </div>
        <QuestionBox send="topik" handle={handleModal} modalStatus={modal} name={'Tanya Soal'} placeholder={'Masukkan Pertanyaan'} tryoutId={data.discuss._id} />
        <QuestionBox send="komentar" handle={handleComment} modalStatus={comment} name={'Tambah Komentar'} placeholder={'Masukkan Komentar'} topikIndex={topikIndex} tryoutId={data.discuss._id} />
    </>
  )
}

export const getServerSideProps = ({ req, res }) => {
    const data = {
        "discuss": req.session.discuss,
        "isLoggedIn": req.session.isLoggedIn
    }

    return {
        props: {
            data
        }
    }
}
