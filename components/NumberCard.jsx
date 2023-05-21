import Link from 'next/link'

const NumberCard = ({ data, select, index, handleClick, button, onClick, href }) => {
  return (
    <div className='w-full p-5 bg-white rounded-lg shadow-md mb-4'>
        <p className='w-full font-bold'>Nomor Soal</p>
        <div className='grid grid-cols-4 w-full gap-2 md:mt-4 my-4 md:my-0'>
            {data.map((data, i) =>
                <button key={i} onClick={() => handleClick(i, select)} className={index == i ? 'w-full py-1 bg-blue-dark border-2 border-blue-dark text-white font-medium text-center rounded-md hover:brightness-110 transition-all duration-100' : data.jawaban != '' ? 'w-full py-1 bg-blue border-2 border-blue text-white font-medium text-center rounded-md hover:brightness-110 transition-all duration-100' : 'w-full py-1 font-medium border-2 border-primary bg-white text-center rounded-md hover:bg-blue-100 transition-all duration-100'}>{i+1}</button>
            )}
        </div>
        <Link href={href}>
          <button onClick={''} className='flex md:hidden justify-center w-full h-fit bg-primary font-bold text-white text-center p-3 mt-2 rounded-lg'>{button}</button>
        </Link>
    </div>
  )
}

export default NumberCard