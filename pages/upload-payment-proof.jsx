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
import axios from 'axios'
import getBaseUrl from '@/utils/getBaseUrl'
import Navbar from '@/components/Navbar'

export default function UploadPaymentProof({ data }) {
  const router = useRouter()
  const [image, setImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState('/placeholder-img.png')
  const [uploaded, setUploaded] = useState()
  const [modalStatus, setModalStatus] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const baseUrl = getBaseUrl()

  const changeImage = (e) => {
    setImage(e.target.files[0])
    setSelectedImage(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = () => {
    const body = new FormData()
    body.set('key', data.API_KEY)
    body.append('image', image)

    axios({
      method: "POST",
      url: 'https://api.imgbb.com/1/upload',
      data: body
    }).then(res => {
      console.log(res.data.data)
      setImageUrl(res.data.data.display_url)
      setUploaded(true)
    }).catch(err => {
      console.log(err)
      setUploaded(false)
    })
    setModalStatus(true)
  }

  const handleModal = () => {
    setModalStatus(!modalStatus);
    // uploaded ? (
    //   router.push(`/payment/${data.transaksi._id}`)
    // ) : ('')
  }

  return (
    <>
      <Navbar isLoggedIn={data.isLoggedIn} />
      <div className='w-full px-10 md:px-28 pt-28 md:pt-6 pb-20'>
        <Link href='/payment' className='flex items-center text-white p-2'>
          <ArrowBackIosNewIcon className='mr-5' />
          <h1>Upload Bukti Pembayaran</h1>
        </Link>
        <div className='grid place-items-center w-full bg-white px-4 py-5 md:px-80 md:py-8 my-5 md:my-8 rounded-lg shadow-md'>
          <h2 className='text-primary'>Upload Gambar</h2>
          {selectedImage && (
            <div>
              <img src={selectedImage} alt='Bukti Pembayaran' className='my-6 md:my-10' />
            </div>
          )}

          {/* <form onSubmit={onSubmit} className='grid place-items-center'>
            <label htmlFor='file-upload' className='bg-primary font-bold text-white flex items-center justify-center w-fit h-fit px-3 md:px-5 py-2 text-sm md:text-base hover:brightness-110 transition-all duration-100 rounded-[5px] my-3'>
              <AddPhotoAlternateIcon />
              Pilih Gambar
            </label>
            <input id='file-upload' type='file' name='payment-proof' onChange={changeImage} accept='image/*' hidden />
            <button type='submit' className='bg-primary font-bold text-white flex items-center justify-center w-fit h-fit px-5 md:px-8 py-2 text-sm md:text-base hover:brightness-110 transition-all duration-100'>Kirim Bukti Bayar</button>
          </form> */}
          <div className='grid place-items-center'>
            <label htmlFor='file-upload' className='bg-primary font-bold text-white flex items-center justify-center w-fit h-fit px-3 md:px-5 py-2 text-sm md:text-base hover:brightness-110 transition-all duration-100 rounded-[5px] my-3'>
              <AddPhotoAlternateIcon />
              Pilih Gambar
            </label>
            <input id='file-upload' type='file' name='payment-proof' onChange={changeImage} accept='image/*' hidden />
            <button 
              className='bg-primary font-bold text-white flex items-center justify-center w-fit h-fit px-5 md:px-8 py-2 text-sm md:text-base hover:brightness-110 transition-all duration-100'
              onClick={handleSubmit}
            >Kirim Bukti Bayar</button>
          </div>
        </div>
      </div>

      <div onClick={handleModal} className={modalStatus ? 'fixed right-0 top-0 w-full h-screen bg-black/25' : ''} />
      <div className={modalStatus ? 'fixed left-1/2 bottom-0 translate-x-[-50%] translate-y-[-50%] w-[80%] md:w-[60%] h-fit rounded-lg bg-white px-8 md:px-10 py-6' : 'hidden'}>
        <div className='flex justify-center items-center w-full'>
          <div className='flex-none w-full'>
            {uploaded ? (
              <div>
                <CheckCircleIcon className='flex justify-center w-full h-[200px] text-green px-8 pb-2' />
                <p className='flex justify-center w-full font-bold text-center text-lg md:text-2xl'>Bukti Pembayaran Terkirim</p>
                <form method='post' action="/control/confirm-payment" className='flex justify-center'>
                  <input type="hidden" name="confirm_image" value={imageUrl} />
                  <button className="bg-primary font-bold text-white flex items-center justify-center px-8 py-1 w-fit hover:brightness-110 transition-all duration-100" type="submit">Ok</button>
                </form>
              </div>
            ) : (
              <div>
                <DangerousOutlinedIcon className='flex justify-center w-full h-[200px] text-red px-8 pb-2' />
                <p className='flex justify-center w-full font-bold text-center text-lg md:text-2xl'>Bukti Pembayaran Gagal Terkirim</p>
              </div>
            )}
          </div>
          {/* <div onClick={handleModal} className='absolute p-2 right-1 top-1 rounded-full'>
            <CloseIcon className='flex items-center cursor-pointer' />
          </div> */}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const data = {
    'API_KEY': req.session.API_KEY,
    'transaksi': req.session.transaksi,
    'isLoggedIn': req.session.isLoggedIn
  }

  return {
    props: { data }
  }
}