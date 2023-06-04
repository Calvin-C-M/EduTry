import Navbar from '../components/Navbar'
import Sidebar from './Admin/Sidebar'
import getPathname from '@/utils/getPathname'

const Layout = ({ children }) => {
  const pathname = getPathname()

  if(pathname.includes("admin")) {
    return (
      <>
        <header>
          <Sidebar />
        </header>
        <main className='ml-44 mr-12 py-5'>
          {children}
        </main>
      </>
    )
  }
  return (
    <>
        <Navbar />
        <main className='min-h-screen pt-28'>
          { children }
        </main>
    </>
  )
}

export default Layout