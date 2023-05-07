import React, {useState} from 'react'
import DiscussCard from './DiscussCard'

const DiscussPanel = ({ data }) => {
    const [comment, setComment] = useState(false)

  return (
    <div className='w-full h-fit bg-white px-8 py-5 my-8 rounded-xl shadow-md'>
        <div className='w-full h-fit'>
            <DiscussCard username={data.username} message={data.message} />
        </div>
        <div className='flex w-full h-fit justify-between my-2'>
            <div className='font-bold'>
                <p>{data.comments?.length} Komentar</p>
            </div>
            <div className='flex font-light'>
                <button className='hover:text-primary hover:font-medium'>Tambahkan Komentar</button>
                <div onClick={() => setComment(!comment)} className='hover:text-primary hover:font-medium cursor-pointer ml-3'>
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