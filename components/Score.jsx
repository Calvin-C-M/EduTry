const Score = ({ name, data }) => {
    return (
      <div className='w-full grid justify-center mb-5 md:mb-8'>
          <h2 className='w-full p-2 md:p-6 mb-2 text-center text-primary'>{name}</h2>
          <div className='overflow-auto'>
            <table className='w-full table-auto md:table-fixed'>
                <thead className='bg-blue-dark text-white font-bold'>
                    <tr>
                        <th className='w-[50%] px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>Nama</th>
                        <th className='px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>Benar</th>
                        <th className='px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>Salah</th>
                        <th className='px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>Kosong</th>
                        <th className='px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {(data?.length) == 0 ? (
                        <tr>
                            <td className='p-2 md:p-3 text-sm md:text-base text-center'>-</td>
                            <td className='p-2 md:p-3 text-sm md:text-base text-center'>-</td>
                            <td className='p-2 md:p-3 text-sm md:text-base text-center'>-</td>
                            <td className='p-2 md:p-3 text-sm md:text-base text-center'>-</td>
                            <td className='p-2 md:p-3 text-sm md:text-base text-center'>-</td>
                        </tr>
                    ) : (data.map((data) => 
                        <tr>
                            <td className='p-2 md:p-3 text-sm md:text-base text-left'>{data.nama}</td>
                            <td className='p-2 md:p-3 text-sm md:text-base text-center'>{data.benar}</td>
                            <td className='p-2 md:p-3 text-sm md:text-base text-center'>{data.salah}</td>
                            <td className='p-2 md:p-3 text-sm md:text-base text-center'>{data.kosong}</td>
                            <td className='p-2 md:p-3 text-sm md:text-base text-center'>{data.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
      </div>
    )
  }
  
  export default Score