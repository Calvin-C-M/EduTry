const ProductCard = ({ nama, harga, desc }) => {
  return (
    <div className='w-full bg-white text-black px-4 py-3 md:px-6 md:py-5 rounded-lg shadow-md'>
        <h1 className='w-full'>{nama}</h1>
        <h2 className='flex justify-end w-full mt-1 mb-2 md:mt-3 md:mb-4 border-b-2 border-black'>Rp. {harga}</h2>
        <p className='w-full'>{desc}</p>
    </div>
  )
}

export default ProductCard