import CloseIcon from '@mui/icons-material/Close';

const QuestionBox = ({ send, handle, modalStatus, name, placeholder, topikIndex, tryoutId }) => {
  return (
    <>
        <div onClick={handle} className={modalStatus ? 'fixed right-0 top-0 w-full h-screen bg-black/25' : ''} />
        <div className={modalStatus ? 'fixed left-1/2 bottom-0 translate-x-[-50%] translate-y-[-30%] w-[80%] md:w-[60%] h-fit rounded-lg bg-white px-8 md:px-10 py-6' : 'hidden'}>
            <div className='flex justify-between items-center'>
                <h2>{name}</h2>
                <div onClick={handle} className='absolute p-2 right-1 top-1 rounded-full'>
                    <CloseIcon className='flex items-center cursor-pointer' />
                </div>
            </div>
            <form action={"/add/discuss/" + send} method="post">
                {
                    (send == "komentar") && <input type="hidden" name="topik_index" value={topikIndex} />
                }
                <textarea name='isi' id='input' rows='8' className='w-full p-3 my-4 bg-white border border-gray rounded-lg resize-none' placeholder={placeholder} />
                <input type="hidden" name="id_tryout" value={tryoutId} />
                <div className='flex justify-end w-full h-full'>
                    <button className='bg-primary font-bold text-white flex items-center justify-center w-fit h-fit px-3 md:px-5 py-2 text-sm md:text-base hover:brightness-110 transition-all duration-100'>Kirim</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default QuestionBox