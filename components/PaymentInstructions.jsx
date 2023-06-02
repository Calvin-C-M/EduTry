const PaymentInstructions = ({ instructions }) => {
  return (
    <div className='w-full bg-white px-4 py-3 md:px-6 md:py-5 rounded-lg shadow-md'>
        <p className='font-bold text-primary text-base md:text-lg'>Petunjuk Pembayaran</p>
        <p className='text-black mt-4'>{instructions}</p>
    </div>
  )
}

export default PaymentInstructions