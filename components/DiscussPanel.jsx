import React, {useState} from 'react'
import DiscussCard from './DiscussCard'

const DiscussPanel = ({ data, handle }) => {
    const [comment, setComment] = useState(false)

  return (
    <div className='w-full h-fit bg-white px-8 py-5 my-3 rounded-xl shadow-md'>
        <div className='w-full h-fit'>
            <DiscussCard username={data.username} message={data.message} />
        </div>
        <div className='flex-none md:flex w-full h-fit justify-between my-2'>
            <div className='font-bold text-sm md:text-base my-1 md:my-0'>
                <p>{data.comments?.length} Komentar</p>
            </div>
            <div className='flex-none md:flex font-light'>
                <button onClick={handle} className='hover:text-primary hover:font-medium text-sm md:text-base my-1 md:my-0'>Tambahkan Komentar</button>
                <div onClick={() => setComment(!comment)} className='hover:text-primary hover:font-medium text-sm md:text-base cursor-pointer my-1 md:my-0 md:ml-3'>
                    {comment ? (<p>Sembunyikan Komentar</p>) : (<p>Tampilkan Komentar</p>)}
                </div>
            </div>
        </div>
        {comment ? (
            <div className='w-full h-fit'>
                {data.comments.map((comment) => <DiscussCard username={comment.username} message={comment.message} />)}
            </div>
        ) : ('')}
    </div>
  )
}

export default DiscussPanel