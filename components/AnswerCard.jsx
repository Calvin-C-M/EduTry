import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const AnswerCard = ({ key, allData, data, index, handleIndex, handleNumCard }) => {
    const jawaban = data.terpilih.isi //jawaban dari user
    const jawabanAsli = data.jawaban_asli // jawaban yang beneran
    const skor = data.skor // skor user
    return (
        <div key={key} className='w-full h-fit bg-white px-8 py-5 rounded-lg shadow-md'>
            <div className='flex justify-between md:justify-start items-center w-full mb-2 md:my-2'>
                <p className='text-primary font-bold text-lg md:text-xl'>Soal {data.id+1}</p>
                <button onClick={handleNumCard} className='flex md:hidden items-center w-fit h-full bg-primary px-3 py-1 font-bold text-sm text-white'>Nomor Soal</button>
            </div>
            <p className='w-full text-black text-justify my-4'>{data.isi}</p>
            <div className='w-full my-1'>
                {data.pilihan.map((data, i) => (
                    <button 
                        key={i} 
                        className={
                            (data.isi == jawabanAsli) // jika jawaban user benar
                            ? 'w-full bg-green border-2 border-blue-dark text-white px-3 py-2 my-1 text-left'
                            : (jawaban == data.isi && skor <= 0) // jika jawaban user salah
                            ? 'w-full bg-red border-2 border-blue-dark text-white px-3 py-2 my-1 text-left'
                            : 'w-full border-2 border-primary text-primary px-3 py-2 my-1 text-left'
                        }
                    >{data.index}. {data.isi}</button>
                ))}
            </div>
            <div className='w-full'>
                <p className='text-primary font-bold text-lg md:text-xl my-2'>Pembahasan</p>
                <p className='text-black text-justify my-4'>{data.pembahasan.isi}</p>
            </div>
            <div className='w-full'>
                <p className='text-primary font-bold text-lg md:text-xl mt-2 mb-4'>Video Pembahasan</p>
                <iframe src={data.pembahasan.link_video} width='100%' height='386vh' title='Video Pembahasan' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' frameborder='0'></iframe>
            </div>
            <div className='flex justify-between items-center w-full mt-6 mb-3'>
                {index > 0 ? (
                    <div className='flex justify-start w-full'>
                        <button onClick={() => handleIndex(index-1)} className='w-fit p-1 md:p-2 bg-white text-primary rounded-full hover:bg-blue-100 transition-all duration-100'>
                            <ArrowBackIosNewIcon />
                        </button>
                    </div>
                ) : ''}
                {index < allData?.length - 1 ? (
                    <div className='flex justify-end w-full'>
                        <button onClick={() => handleIndex(index+1)} className='w-fit p-1 md:p-2 bg-white text-primary rounded-full hover:bg-blue-100 transition-all duration-100'>
                            <ArrowForwardIosIcon />
                        </button>
                    </div>
                ) : ''}
            </div>
        </div>
    )
}

export default AnswerCard