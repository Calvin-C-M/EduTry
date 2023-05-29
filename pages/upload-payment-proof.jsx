import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import CloseIcon from '@mui/icons-material/Close'
import PlaceholderImg from "@/public/placeholder-img.png"

export default function UploadPaymentProof() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState('/placeholder-img.png')
  const [uploaded, setUploaded] = useState()
  const [modalStatus, setModalStatus] = useState(false)

  const changeImage = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // setUploaded(true) //jika bukti berhasil terupload
    setUploaded(false) //jika bukti gagal terupload
    setModalStatus(true)
  }

  const handleModal = () => {
    setModalStatus(!modalStatus);
    uploaded ? (
      router.push('/payment')
    ) : ('')
  }

  return (
    <>
      <div className='w-full px-10 md:px-28 pt-1 md:pt-6 pb-20'>
        <Link href='/payment' className='flex items-center text-white p-2'>
          <ArrowBackIosNewIcon className='mr-5' />
          <h1>Upload Bukti Pembayaran</h1>
        </Link>
        <div className='grid place-items-center w-full bg-white px-4 py-5 md:px-80 md:py-8 my-5 md:my-8 rounded-lg shadow-md'>
          <h2 className='text-primary'>Upload Gambar</h2>
          {selectedImage && (
            <div>
              <Image src={PlaceholderImg} alt='Bukti Pembayaran' className='my-6 md:my-10' />
            </div>
          )}

          <form onSubmit={onSubmit} className='grid place-items-center'>
            <label for='file-upload' className='bg-primary font-bold text-white flex items-center justify-center w-fit h-fit px-3 md:px-5 py-2 text-sm md:text-base hover:brightness-110 transition-all duration-100 rounded-[5px] my-3'>
              <AddPhotoAlternateIcon />
              Pilih Gambar
            </label>
            <input id='file-upload' type='file' name='payment-proof' onChange={changeImage} accept='image/*' hidden />
            <button type='submit' className='bg-primary font-bold text-white flex items-center justify-center w-fit h-fit px-5 md:px-8 py-2 text-sm md:text-base hover:brightness-110 transition-all duration-100'>Kirim Bukti Bayar</button>
          </form>
        </div>
      </div>

      <div onClick={handleModal} className={modalStatus ? 'fixed right-0 top-0 w-full h-screen bg-black/25' : ''} />
      <div className={modalStatus ? 'fixed left-1/2 bottom-0 translate-x-[-50%] translate-y-[-50%] w-[80%] md:w-[60%] h-fit rounded-lg bg-white px-8 md:px-10 py-6' : 'hidden'}>
        <div className='flex justify-center items-center w-full'>
          <div className='flex-none w-full'>
            {uploaded ? (
              <div>
                <CheckCircleIcon className='flex justify-center w-full h-3/5 text-green px-8 pb-2' />
                <p className='flex justify-center w-full font-bold text-center text-lg md:text-2xl'>Bukti Pembayaran Terkirim</p>
              </div>
            ) : (
              <div>
                <DangerousOutlinedIcon className='flex justify-center w-full h-3/5 text-red px-8 pb-2' />
                <p className='flex justify-center w-full font-bold text-center text-lg md:text-2xl'>Bukti Pembayaran Gagal Terkirim</p>
              </div>
            )}
          </div>
          <div onClick={handleModal} className='absolute p-2 right-1 top-1 rounded-full'>
            <CloseIcon className='flex items-center cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}
