import CloseIcon from '@mui/icons-material/Close';

const QuestionBox = ({ send, handle, modalStatus, name, placeholder }) => {
  return (
    <>
        <div onClick={handle} className={modalStatus ? 'fixed right-0 top-0 w-full h-screen bg-black/25' : ''} />
        <div className={modalStatus ? 'fixed left-1/2 bottom-0 translate-x-[-50%] translate-y-[-30%] w-[60%] h-fit rounded-lg bg-white px-8 md:px-10 py-5' : 'hidden'}>
            <div className='flex justify-between items-center'>
                <h2>{name}</h2>
                <div onClick={handle} className='w-10 h-10 flex items-center justify-center rounded-full'>
                    <CloseIcon className='cursor-pointer' />
                </div>
            </div>
            <textarea name='input' id='input' rows='8' className='w-full p-3 my-4 bg-white border border-gray rounded-lg resize-none' placeholder={placeholder} />
            <div className='flex justify-end w-full h-full'>
                <button onClick={send} className='bg-primary font-bold text-white flex items-center justify-center w-fit h-fit px-3 md:px-5 py-2 text-sm md:text-base hover:brightness-110 transition-all duration-100'>Kirim</button>
            </div>
        </div>
    </>
  )
}

export default QuestionBox