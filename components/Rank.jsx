const Rank = ({ data }) => {
    return (
		<div className='w-full'>
			<h1 className='flex justify-center w-full text-white'>Ranking</h1>
			<div className='w-full bg-white px-10 py-8 my-8 rounded-lg shadow-md'>
				<div className='overflow-auto'>
					<table className='w-full table-auto md:table-fixed'>
						<thead className='font-bold'>
						<tr>
							<th className='w-[8%] px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>No</th>
							<th className='w-[35%] px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>Nama</th>
							<th className='w-[21%] px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>Pilihan</th>
							<th className='w-[21%] px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>Asal</th>
							<th className='w-[15%] px-3 py-2 md:px-5 md:py-3 text-sm md:text-base'>Nilai</th>
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
									<td className='p-2 md:p-3 text-sm md:text-base text-center'>{data.id}</td>
									<td className='p-2 md:p-3 text-sm md:text-base text-left'>{data.nama}</td>
									<td className='p-2 md:p-3 text-sm md:text-base text-center'>{data.pilihan}</td>
									<td className='p-2 md:p-3 text-sm md:text-base text-center'>{data.asal}</td>
									<td className='p-2 md:p-3 text-sm md:text-base text-center'>{data.nilai}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
    )
  }
  
  export default Rank