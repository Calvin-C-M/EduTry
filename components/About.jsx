import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='bg-blue-dark text-white w-full px-10 md:px-28 py-8 pt-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center'>
            <div>
                <h1 className='my-6'>EduTry: The Key to Exam Success!</h1>
                <p className='my-6'>Edutry merupakan platform simulasi ujian seleksi perguruan tinggi yang dilengkapi dengan fitur analitik performa personal, penjelasan detail untuk setiap soal, dan desain tryout yang relevan dan realistis. Edutry dapat membantu kamu dalam mempersiapkan diri dan mencapai kesuksesan dalam ujian.</p>
                
                <Link href='/'>
                    <button className='flex-none bg-primary px-7 py-2 my-3 font-medium text-white shadow-sm'>Daftar Sekarang</button>
                </Link>
            </div>
            <div className='hidden md:flex justify-center'>
                <Image src='./happy-student-amico.svg' alt='Happy Student' width={500} height={500} />
            </div>
        </div>
    </div>
  )
}

export default About