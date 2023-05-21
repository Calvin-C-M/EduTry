// import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Pict from '../public/banner.png'
// import Pict1 from '../public/banner-1.png'
// import Pict2 from '../public/banner-2.png'
// import Pict3 from '../public/banner-3.png'
// import Pict4 from '../public/banner-4.png'

// const featuredProducts = [
//   Pict1,
//   Pict2,
//   Pict3,
//   Pict4,
// ];

// let count = 0;
// let slideInterval;

const Banner = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   startSlider();
  // }, []);

  // const startSlider = () => {
  //   slideInterval = setInterval(() => {
  //     handleNext();
  //   }, 5000);
  // };

  // const handleNext = () => {
  //   const productsLength = featuredProducts.length;
  //   count = (currentIndex + productsLength - 1) % productsLength;
  //   // count = (count + 1) % featuredProducts.length;
  //   setCurrentIndex(count);
  // };

  return (
    <div className='w-full -mt-8'>
      <div className='flex justify-between items-center w-full'>
        <Image src={Pict} alt='banner' />
      </div>
    </div>
    // <div className='w-full select-none pt-20'>
    //   <div className='aspect-w-16 aspect-h-9'>
    //     <Image src={featuredProducts[currentIndex]} alt='banner' />
    //   </div>
    // </div>
  )
}

export default Banner