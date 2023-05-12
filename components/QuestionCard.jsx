import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const QuestionCard = ({ key, allData, data, index, select, handleSelect, handleClick }) => {
    return (
    <div key={key} className='w-full h-fit bg-white px-8 py-5 rounded-lg shadow-md'>
        <div className='w-full text-primary font-bold text-lg md:text-xl my-2'>{data.judul}</div>
        <p className='w-full text-black text-justify my-4'>{data.soal}</p>
        <div className='w-full my-1'>
            <button onClick={() => handleSelect('A')} className={select == 'A' ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left' : 'w-full border-2 border-primary text-primary px-3 py-2 my-1 text-left'}>{data.pilihan[0]}</button>
            <button onClick={() => handleSelect('B')} className={select == 'B' ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left' : 'w-full border-2 border-primary text-primary px-3 py-2 my-1 text-left'}>{data.pilihan[1]}</button>
            <button onClick={() => handleSelect('C')} className={select == 'C' ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left' : 'w-full border-2 border-primary text-primary px-3 py-2 my-1 text-left'}>{data.pilihan[2]}</button>
            <button onClick={() => handleSelect('D')} className={select == 'D' ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left' : 'w-full border-2 border-primary text-primary px-3 py-2 my-1 text-left'}>{data.pilihan[3]}</button>
            <button onClick={() => handleSelect('E')} className={select == 'E' ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left' : 'w-full border-2 border-primary text-primary px-3 py-2 my-1 text-left'}>{data.pilihan[4]}</button>
        </div>
        <div className='flex justify-between w-full mt-6 mb-3'>
            {index > 0 ? (
                <button onClick={() => handleClick(index-1)} className='w-full flex justify-start items-center text-primary'>
                    <ArrowCircleLeftOutlinedIcon />
                    <p className='mx-3'>Sebelumnya</p>
                </button>
            ) : ''}
            {index < allData?.length - 1 ? (
                <button onClick={() => handleClick(index+1)} className='w-full flex justify-end items-center text-primary'>
                    <p className='mx-3'>Selanjutnya</p>
                    <ArrowCircleRightOutlinedIcon />
                </button>
            ) : ''}
        </div>
    </div>
  )
}

export default QuestionCard