import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const PaymentMethod = ({ handle }) => {
    const [bank, setBank] = useState(true)
    const [wallet, setWallet] = useState(true)

    const handleBank = () => {
        setBank(!bank)
    }

    const handleWallet = () => {
        setWallet(!wallet)
    }

  return (
    <div className='w-full bg-white p-2 md:p-5 rounded-lg shadow-md'>
        <div onClick={handleWallet} className='flex justify-between items-center w-full text-primary font-bold text-base md:text-lg cursor-pointer mb-2'>
            Pembayaran E-Wallet
            {wallet ? (
                <KeyboardArrowUpIcon />
            ) : (
                <KeyboardArrowDownIcon />
            )}
        </div>
        {wallet ? (
            <div className='w-full'>
                <div className='flex justify-between items-center h-10 p-2 border-b-2 border-black'>
                    <label for='gopay' className='grid grid-cols-2 place-items-center w-3/5 gap-6 text-base md:text-lg font-bold text-black'>
                        <img src='https://gopay.co.id/_nuxt/img/site-logo.3e08530v120.png' alt='Gopay Logo' className='h-4/5' />
                        <p className='place-self-start'>Gopay</p>
                    </label>
                    <input onClick={() => handle('gopay')} id='gopay' type='radio' value='gopay' name='payment' className='w-4 h-4 text-primary bg-white border-gray-light' />
                </div>
                <div className='flex justify-between items-center h-10 p-2 border-b-2 border-black'>
                    <label for='ovo' className='grid grid-cols-2 place-items-center w-3/5 gap-6 text-base md:text-lg font-bold text-black'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/512px-Logo_ovo_purple.svg.png' alt='OVO Logo' className='h-4/5' />
                        <p className='place-self-start'>OVO</p>
                    </label>
                    <input onClick={() => handle('ovo')} id='ovo' type='radio' value='ovo' name='payment' className='w-4 h-4 text-primary bg-white border-gray-light' />
                </div>
                <div className='flex justify-between items-center h-10 p-2 mb-4 border-b-2 border-black'>
                    <label for='shopeepay' className='grid grid-cols-2 place-items-center w-3/5 gap-6 text-base md:text-lg font-bold text-black'>
                        <img src='https://shopeepay.co.id/src/pages/home/assets/images/2-shopeepay-rectangle-orange2.png' alt='ShopeePay Logo' className='h-4/5' />
                        <p className='place-self-start'>ShopeePay</p>
                    </label>
                    <input onClick={() => handle('shopeepay')} id='shopeepay' type='radio' value='shopeepay' name='payment' className='w-4 h-4 text-primary bg-white border-gray-light' />
                </div>
            </div>
        ) : ''}
        <div onClick={handleBank} className='flex justify-between items-center w-full text-primary font-bold text-base md:text-lg cursor-pointer mb-2'>
            Bank Transfer
            {bank ? (
                <KeyboardArrowUpIcon />
            ) : (
                <KeyboardArrowDownIcon />
            )}
        </div>
        {bank ? (
            <div className='w-full'>
                <div className='flex justify-between items-center h-10 p-2 border-b-2 border-black'>
                    <label for='mandiri' className='grid grid-cols-2 place-items-center w-3/5 gap-6 text-base md:text-lg font-bold text-black'>
                        <img src='https://bankmandiri.co.id/image/layout_set_logo?img_id=31567&t=1683824600225' alt='Mandiri Logo' className='h-4/5' />
                        <p className='place-self-start'>Mandiri</p>
                    </label>
                    <input onClick={() => handle('mandiri')} id='mandiri' type='radio' value='mandiri' name='payment' className='w-4 h-4 text-primary bg-white border-gray-light' />
                </div>
                <div className='flex justify-between items-center h-10 p-2 border-b-2 border-black'>
                    <label for='bca' className='grid grid-cols-2 place-items-center w-3/5 gap-6 text-base md:text-lg font-bold text-black'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/799px-Bank_Central_Asia.svg.png' alt='BCA Logo' className='h-4/5' />
                        <p className='place-self-start'>BCA</p>
                    </label>
                    <input onClick={() => handle('bca')} id='bca' type='radio' value='bca' name='payment' className='w-4 h-4 text-primary bg-white border-gray-light' />
                </div>
                <div className='flex justify-between items-center h-10 p-2 border-b-2 border-black'>
                    <label for='bni' className='grid grid-cols-2 place-items-center w-3/5 gap-6 text-base md:text-lg font-bold text-black'>
                        <img src='https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/175px-BNI_logo.svg.png?20131101150556' alt='BNI Logo' className='h-4/5' />
                        <p className='place-self-start'>BNI</p>
                    </label>
                    <input onClick={() => handle('bni')} id='bni' type='radio' value='bni' name='payment' className='w-4 h-4 text-primary bg-white border-gray-light' />
                </div>
                <div className='flex justify-between items-center h-10 p-2 mb-4 border-b-2 border-black'>
                    <label for='bri' className='grid grid-cols-2 place-items-center w-3/5 gap-6 text-base md:text-lg font-bold text-black'>
                        <img src='https://bri.co.id/o/bri-corporate-theme/images/bri-logo.png' alt='BRI Logo' className='h-4/5' />
                        <p className='place-self-start'>BRI</p>
                    </label>
                    <input onClick={() => handle('bri')} id='bri' type='radio' value='bri' name='payment' className='w-4 h-4 text-primary bg-white border-gray-light' />
                </div>
            </div>
        ) : ''}
    </div>
  )
}

export default PaymentMethod