const DiscussCard = ({ username, message }) => {
  return (
    <div className={'w-full h-fit p-3 my-3 border border-primary rounded-lg outline-none text-sm md:text-base'}>
        <div className='w-full h-fit font-bold mb-2'>
            <p>{username}</p>
        </div>
        <div className='w-full h-fit'>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default DiscussCard