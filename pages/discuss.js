import Link from 'next/link'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DiscussPanel from '@/components/DiscussPanel'

export default function Discuss() {
    const discussData = [
        {id:1, username:'Username 1', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', comments:[{id:1, username:'Konselor', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus.'}, {id:2, username:'Username 2', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus.'}]},
        {id:1, username:'Username 2', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus?', comments:[{id:1, username:'Konselor', message:'Lorem ipsum dolor sit amet consectetur. Egestas eu senectus aliquam nunc ornare nulla eu nisl. Eget dignissim libero egestas sit sodales ultricies imperdiet commodo sem. Aliquam ut vestibulum quisque elit mauris quis pretium. Ut porttitor ornare diam morbi at ac. At viverra mauris nisi diam placerat at. Amet congue augue amet urna gravida pellentesque lobortis adipiscing. Amet fermentum tristique placerat suscipit. Mattis curabitur faucibus ornare sit lobortis aliquam purus.'}]},
    ]

  return (
    <div className='w-full px-10 md:px-28 py-28'>
        <div className='flex justify-between'>
            <div className='flex items-center text-primary'>
                <Link href='/' className='p-2 mr-3'>
                    <ArrowBackIosNewIcon />
                </Link>
                <h1>Diskusi Tryout #1</h1>
            </div>
            <button className='bg-primary font-bold text-white flex items-center justify-center w-fit h-fit px-3 md:px-5 py-2 text-sm md:text-base hover:brightness-110 transition-all duration-100'>
                Tanya Soal
            </button>
        </div>
        {discussData.map((data) => <DiscussPanel data={data} />)}
    </div>
  )
}
