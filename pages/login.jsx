import Button from "@/components/Button"
import { useState } from "react"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PersonIcon from '@mui/icons-material/Person';
export default function Login(){
    const [showPassword, setShowPassword]=useState(false)
    const [username, setUser]=useState("")
    const [password, setPassword]=useState("")
    const [errorModal, setErrorModal]=useState(false)
    return(
        <div className="flex ">
        <div className="w-1/2 h-[100vh] bg-[url('/banner-1.png')]">
            
        </div>
        <div className='w-1/2 px-10 md:px-28 pt-8 md:pt-20 bg-primary h-[100vh] flex justify-center items-center'>
        <div className="px-[50px] bg-blue-dark py-[25px] w-3/5 rounded">
            <div className="flex justify-between">
                <p className="border-b-2 px-2 text-white font-bold">
                    Login
                </p>
                <a className="text-white " href="/register">sign up</a>
            </div>
            <div className="relative mt-10">
                <input onChange={(e)=> setUser(e.target.value)} value={username} type="username" className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Username"/>
                <PersonIcon className="absolute left-2 top-2"/>

            </div>
            <div className="relative mt-5">
                <input onChange={(e)=> setPassword(e.target.value)} value={password} type={showPassword?"text":"password"} className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Password"/>
                <svg className="absolute top-3 left-2" width="21" height="13" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.35712 14.0503C8.56518 14.0503 7.88723 13.7268 7.32327 13.0799C6.75931 12.4331 6.47734 11.6554 6.47734 10.747C6.47734 9.83866 6.75931 9.06103 7.32327 8.41415C7.88723 7.76727 8.56518 7.44383 9.35712 7.44383C10.1491 7.44383 10.827 7.76727 11.391 8.41415C11.9549 9.06103 12.2369 9.83866 12.2369 10.747C12.2369 11.6554 11.9549 12.4331 11.391 13.0799C10.827 13.7268 10.1491 14.0503 9.35712 14.0503ZM9.35712 20.6567C6.9573 20.6567 4.91745 19.6932 3.23758 17.7664C1.55771 15.8395 0.717773 13.4997 0.717773 10.747C0.717773 7.99436 1.55771 5.65459 3.23758 3.72771C4.91745 1.80084 6.9573 0.837402 9.35712 0.837402C10.965 0.837402 12.4229 1.29159 13.7308 2.19998C15.0387 3.10836 16.0766 4.30578 16.8445 5.79222H29.5156L33.8353 10.747L27.3557 18.1793L24.476 15.7019L21.5962 18.1793L18.5364 15.7019H16.8445C16.0766 17.1883 15.0387 18.3857 13.7308 19.2941C12.4229 20.2025 10.965 20.6567 9.35712 20.6567ZM9.35712 17.3535C10.701 17.3535 11.8829 16.8855 12.9028 15.9496C13.9228 15.0137 14.6007 13.83 14.9367 12.3986H19.4364L21.5242 14.0915L24.476 11.5728L27.0318 13.8438L29.7316 10.747L28.2917 9.09543H14.9367C14.6007 7.66404 13.9228 6.48039 12.9028 5.54448C11.8829 4.60857 10.701 4.14062 9.35712 4.14062C7.77324 4.14062 6.41734 4.78749 5.28943 6.08125C4.16151 7.37501 3.59755 8.93027 3.59755 10.747C3.59755 12.5638 4.16151 14.1191 5.28943 15.4128C6.41734 16.7066 7.77324 17.3535 9.35712 17.3535Z" fill="#1C1B1F"/>
                </svg>
                {showPassword && <VisibilityOutlinedIcon onClick={()=> setShowPassword(!showPassword)} className="absolute cursor-pointer top-2 right-2"/>}
                {!showPassword && <VisibilityOffOutlinedIcon onClick={()=> setShowPassword(!showPassword)} className="absolute cursor-pointer top-2 right-2"/>}
            </div>
            <Button className="w-full mt-5">
                Login
            </Button>
            <a className="text-center w-full block mt-5 text-white font-extralight text-sm" href="/forget"> Forget Password?</a>
        </div>
        </div>
        {<div id="popup-modal" tabindex="-1" class="fixed flex items-center justify-center top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-white">
                    <button type="button" class="absolute top-3 right-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-6 text-center">
                        <CancelOutlinedIcon className="text-red text-5xl"/>
                        <h3 class="mb-5 text-lg font-normal text-black dark:text-black">User tidak ditemukan!</h3>
                    </div>
                </div>
            </div>
        </div>}

        </div>
        
    )
}