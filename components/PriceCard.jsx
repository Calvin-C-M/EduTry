const PriceCard = ({ data, subTotal }) => {
  return (
    <div className='w-full bg-white px-4 py-3 md:px-6 md:py-5 rounded-lg shadow-md my-5'>
        <h2 className='w-full text-primary'>Ringkasan Pembelian</h2>
        <div className='flex justify-between items-center w-full text-black border-b-2 border-black mt-4 mb-2'>
            <p>Harga paket (1 item)</p>
            <p className='font-medium'>Rp. {data.harga}</p>
        </div>
        <div className='flex justify-between items-center w-full text-black'>
            <p>Subtotal</p>
            <p className='font-bold'>Rp. {subTotal}</p>
        </div>
    </div>
  )
}

export default PriceCard