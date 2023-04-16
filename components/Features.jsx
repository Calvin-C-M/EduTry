import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div id='features' className='text-black w-full px-10 md:px-28 py-3 md:py-8'>
        <div>
            <h1 className='mt-6 mb-6 md:mb-12'>Fitur-Fitur EduTry</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center py-1 md:py-6'>
            <div>
                <Image src='./online-learning-amico.svg' alt='Pembahasan Soal' width={300} height={300} />
            </div>
            <div>
                <h1 className='my-6'>Pembahasan Soal</h1>
                <p className='my-6'>Edutry menyediakan penjelasan detail untuk setiap jawaban yang diberikan oleh siswa. Fitur ini dilengkapi dengan pembahasan dalam bentuk teks, video pembahasan, serta forum diskusi terkait tryout yang dikerjakan. Sehingga siswa dapat memahami setiap konsep dan teknik yang terlibat dalam menjawab soal dengan benar.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center py-1 md:py-6'>
            <div className='md:hidden'>
                <Image src='./pie-chart-amico.svg' alt='Statistik Soal' width={300} height={300} />
            </div>
            <div>
                <h1 className='md:text-right my-6'>Statistik Soal</h1>
                <p className='md:text-right my-6'>Edutry menyediakan informasi tentang performa siswa, seperti berapa banyak jawaban yang benar, salah, atau tidak dijawab. Statistik ini membantu siswa untuk memahami seberapa baik kemampuan mereka dalam menjawab setiap jenis soal. Dengan informasi ini, siswa dapat mengidentifikasi kelemahan mereka dan memperbaiki performa mereka di masa depan.</p>
            </div>
            <div className='hidden md:flex'>
                <Image src='./pie-chart-amico.svg' alt='Statistik Soal' width={300} height={300} />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center py-1 md:py-6'>
            <div>
                <Image src='./personal-goals-amico.svg' alt='Ranking Ujian' width={300} height={300} />
            </div>
            <div>
                <h1 className='my-6'>Ranking Ujian</h1>
                <p className='my-6'>Edutry menyediakan peringkat siswa berdasarkan performa dalam tryout. Fitur ini memungkinkan untuk dapat membandingkan performa dengan siswa lain dan mengetahui kesiapan untuk bersaing dalam menghadapi ujian. Ranking ujian pada Edutry dapat dijadikan motivasi untuk mencapai performa yang lebih baik.</p>
            </div>
        </div>
    </div>
  )
}

export default Features