import React from 'react'
import Image from 'next/image'
import ProPict from '../public/profile.jpg'

const Review = () => {
  return (
    <div id='about' className='bg-blue-dark text-white w-full px-6 md:px-28 py-3 md:py-8'>
        <div className='px-6 md:px-48'>
            <div>
                <h1 className='text-center mt-6 mb-6 md:mb-12'>Apa kata orang tentang EduTry</h1>
                <p className='text-center mb-6 md:mb-12'>“Lorem ipsum dolor sit amet consectetur. Viverra ultricies ultricies hendrerit metus orci. Id ipsum in fames vitae euismod gravida tortor pulvinar condimentum. Turpis nisi interdum nisl ullamcorper. Enim arcu eget nisl sed adipiscing scelerisque duis. Mauris consequat leo sociis et tempus. Dui nibh vehicula eros sit proin. Et nisl egestas sagittis dignissim eros odio amet. Magna vitae eget nisl ornare scelerisque pulvinar lorem posuere. Pharetra cursus sit integer sit.”</p>
            </div>
            <div className='flex justify-center items-center mb-6'>
                <Image src={ProPict} alt='Profile Picture' className='flex-none w-9 md:w-14 h-9 md:h-14 rounded-full' />
                <div className='flex-none'>
                    <p className='mx-3 md:mx-6 font-medium text-sm md:text-base'>Deani PV</p>
                    <p className='mx-3 md:mx-6 font-light text-sm md:text-base'>Teknik Informatika - Universitas Padjadjaran</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review