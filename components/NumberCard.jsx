const NumberCard = ({ data, index, handleClick, button }) => {
  return (
    <div className='w-full p-5 bg-white rounded-lg shadow-md my-4'>
        <p className='w-full font-bold'>Nomor Soal</p>
        <div className='grid grid-cols-4 w-full gap-2 my-4'>
            {data.map((data, i) =>
                <button key={i} onClick={() => handleClick(i)} className={index == i ? 'w-full py-1 bg-blue-dark border-2 border-blue-dark text-white font-medium text-center rounded-md' : 'w-full py-1 font-medium border-2 border-primary text-center rounded-md'}>{i+1}</button>
            )}
        </div>
        <button onClick={''} className='flex justify-center w-full h-fit bg-primary font-bold text-white text-center p-3 mt-2 rounded-lg'>{button}</button>
    </div>
  )
}

export default NumberCard