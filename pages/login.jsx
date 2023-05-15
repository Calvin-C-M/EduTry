import Button from "@/components/Button"
import { useState } from "react"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
export default function Login(){
    const [showPassword, setShowPassword]=useState(false)
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
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
                <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Email"/>
                <svg className="absolute top-2 left-2" width="21" height="19" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.71355 20.2285C2.11959 20.2285 1.61113 19.9859 1.18816 19.5007C0.765195 19.0156 0.553711 18.4323 0.553711 17.751V2.88659C0.553711 2.2053 0.765195 1.62208 1.18816 1.13692C1.61113 0.651759 2.11959 0.40918 2.71355 0.40918H19.9922C20.5862 0.40918 21.0947 0.651759 21.5176 1.13692C21.9406 1.62208 22.1521 2.2053 22.1521 2.88659V17.751C22.1521 18.4323 21.9406 19.0156 21.5176 19.5007C21.0947 19.9859 20.5862 20.2285 19.9922 20.2285H2.71355ZM11.3529 11.5575L2.71355 5.364V17.751H19.9922V5.364L11.3529 11.5575ZM11.3529 9.08011L19.9922 2.88659H2.71355L11.3529 9.08011ZM2.71355 5.364V2.88659V17.751V5.364Z" fill="#1C1B1F"/>
                </svg>

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
        </div>
        
    )
}