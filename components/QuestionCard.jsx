import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const QuestionCard = ({ key, allData, data, index, select, handleSelect, handleClick, handleNumCard }) => {
    return (
    <div key={key} className='w-full h-fit bg-white px-8 py-5 rounded-lg shadow-md'>
        <div className='flex justify-between md:justify-start items-center w-full my-2'>
            <p className='text-primary font-bold text-lg md:text-xl'>{data.judul}</p>
            <button onClick={handleNumCard} className='flex md:hidden items-center w-fit h-full bg-primary px-3 py-1 font-medium text-sm text-white'>Nomor Soal</button>
        </div>
        <p className='w-full text-black text-justify my-4'>{data.soal}</p>
        <div className='w-full my-1'>
            <button onClick={() => handleSelect('A')} className={select == data.pilihan[0].id ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left hover:brightness-110 transition-all duration-100' : 'w-full border-2 bg-white border-primary text-primary px-3 py-2 my-1 text-left hover:bg-blue-100 transition-all duration-100'}>{data.pilihan[0].id}. {data.pilihan[0].name}</button>
            <button onClick={() => handleSelect('B')} className={select == data.pilihan[1].id ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left hover:brightness-110 transition-all duration-100' : 'w-full border-2 bg-white border-primary text-primary px-3 py-2 my-1 text-left hover:bg-blue-100 transition-all duration-100'}>{data.pilihan[1].id}. {data.pilihan[1].name}</button>
            <button onClick={() => handleSelect('C')} className={select == data.pilihan[2].id ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left hover:brightness-110 transition-all duration-100' : 'w-full border-2 bg-white border-primary text-primary px-3 py-2 my-1 text-left hover:bg-blue-100 transition-all duration-100'}>{data.pilihan[2].id}. {data.pilihan[2].name}</button>
            <button onClick={() => handleSelect('D')} className={select == data.pilihan[3].id ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left hover:brightness-110 transition-all duration-100' : 'w-full border-2 bg-white border-primary text-primary px-3 py-2 my-1 text-left hover:bg-blue-100 transition-all duration-100'}>{data.pilihan[3].id}. {data.pilihan[3].name}</button>
            <button onClick={() => handleSelect('E')} className={select == data.pilihan[4].id ? 'w-full bg-blue-dark border-2 border-blue-dark text-white px-3 py-2 my-1 text-left hover:brightness-110 transition-all duration-100' : 'w-full border-2 bg-white border-primary text-primary px-3 py-2 my-1 text-left hover:bg-blue-100 transition-all duration-100'}>{data.pilihan[4].id}. {data.pilihan[4].name}</button>
        </div>
        <div className='flex justify-between items-center w-full mt-6 mb-3'>
            {index > 0 ? (
                <div className='flex justify-start w-full'>
                    <button onClick={() => handleClick(index-1, select)} className='w-fit p-1 md:p-2 bg-white text-primary rounded-full hover:bg-blue-100 transition-all duration-100'>
                        <ArrowBackIosNewIcon />
                    </button>
                </div>
            ) : ''}
            {index < allData?.length - 1 ? (
                <div className='flex justify-end w-full'>
                    <button onClick={() => handleClick(index+1, select)} className='w-fit p-1 md:p-2 bg-white text-primary rounded-full hover:bg-blue-100 transition-all duration-100'>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            ) : ''}
        </div>
    </div>
  )
}

export default QuestionCard