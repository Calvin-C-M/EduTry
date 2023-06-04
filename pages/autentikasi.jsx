import Button from "@/components/Button"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonIcon from '@mui/icons-material/Person';

export default function Login({ data }){
    const [showPassword, setShowPassword]=useState(false)
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [email, setEmail]=useState("")
    const [errorModal, setErrorModal]=useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const { asPath, query } = useRouter();
    useEffect(()=>{
        const hash = asPath.split('#')[1];
        if(hash == "register") setIsLogin(false)
        if(data.message.length > 0) setErrorModal(true)
    }, [ asPath, query ]);

    return(
        <>
            <form action={isLogin ? "/control/login" : "/control/register"} method="post">
                <div className="flex">
                    <div className="w-1/2 h-[100vh] bg-[url('/wellcome.png')]"></div>
                    <div className='w-1/2 px-10 md:px-28 pt-8 md:pt-20 bg-primary h-[100vh] flex justify-center items-center'>
                        <div className="px-[50px] bg-blue-dark py-[25px] w-4/5 rounded">
                            <div className="flex justify-between">
                                {   isLogin ?
                                        <>
                                            <p className="border-b-2 px-2 text-white font-bold">
                                                Login
                                            </p>
                                            <a className="text-white cursor-pointer" onClick={() => setIsLogin(false)}>Sign Up</a>
                                        </>
                                    :
                                    <>
                                        <a className="text-white cursor-pointer" onClick={() => setIsLogin(true)}>Login</a>
                                        <p className="border-b-2 px-2 text-white font-bold">
                                            Sign Up
                                        </p>
                                    </>
                                }
                            </div>
                            {   isLogin ?
                                    <>
                                        <div className="relative mt-10">
                                            <input onChange={(e)=> setUsername(e.target.value)} value={username} name="username" type="username" className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Username"/>
                                            <PersonIcon className="absolute left-2 top-2"/>
                                        </div>
                                        <div className="relative mt-5">
                                            <input onChange={(e)=> setPassword(e.target.value)} value={password} name="password" type={showPassword?"text":"password"} className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Password"/>
                                            <VpnKeyOutlinedIcon className="absolute top-2 left-2" />
                                            {showPassword && <VisibilityOutlinedIcon onClick={()=> setShowPassword(!showPassword)} className="absolute cursor-pointer top-2 right-2"/>}
                                            {!showPassword && <VisibilityOffOutlinedIcon onClick={()=> setShowPassword(!showPassword)} className="absolute cursor-pointer top-2 right-2"/>}
                                        </div>
                                        <Button className="w-full mt-5" type="submit">
                                            Login
                                        </Button>
                                        <a className="text-center w-full block mt-5 text-white font-extralight text-sm" href="/forget"> Forget Password?</a>
                                    </>
                                :
                                    <>
                                        <div className="relative mt-10">
                                            <input onChange={(e)=> setEmail(e.target.value)} value={email} name="email" type="email" className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Email"/>
                                            <MailOutlineIcon className="absolute top-2 left-2" />
                                        </div>
                                        <div className="relative mt-5">
                                            <input onChange={(e)=> setUsername(e.target.value)} value={username} name="username" type="text" className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Username"/>
                                            <PermIdentityIcon className="absolute top-2 left-2" />
                                        </div>
                                        <div className="relative mt-5">
                                            <input onChange={(e)=> setPassword(e.target.value)} value={password} name="password" type={showPassword?"text":"password"} className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Password"/>
                                            <VpnKeyOutlinedIcon className="absolute top-2 left-2" />
                                            {showPassword && <VisibilityOutlinedIcon onClick={()=> setShowPassword(!showPassword)} className="absolute cursor-pointer top-2 right-2"/>}
                                            {!showPassword && <VisibilityOffOutlinedIcon onClick={()=> setShowPassword(!showPassword)} className="absolute cursor-pointer top-2 right-2"/>}
                                        </div>
                                        <Button className="w-full mt-5">
                                            Sign Up
                                        </Button>
                                        <a className="text-center w-full block mt-5 text-white font-extralight text-sm cursor-pointer" onClick={() => setIsLogin(true)}> Have an account? Login</a>
                                    </>
                            }
                        </div>
                    </div>
                     
                {   errorModal && 
                        <div id="popup-modal" tabindex="-1" class="fixed flex items-center justify-center top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative w-full max-w-md max-h-full">
                                <div class="relative bg-white rounded-lg shadow dark:bg-white">
                                    <button onClick={() => setErrorModal(false)} type="button" class="absolute top-3 right-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="p-6 text-center">
                                        {   data.message == "Pendaftaran berhasil!" ?
                                                <CheckOutlinedIcon className="text-green text-5xl"/>
                                            :
                                                <CancelOutlinedIcon className="text-red text-5xl"/>
                                        }
                                        <h3 class="mb-5 text-lg font-normal text-black dark:text-black">{data.message}</h3>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] -z-10"
                                onClick={() => setErrorModal(false)}
                            >
                            </div>
                        </div>
                }
                </div>
            </form>
        </>
    )
}

export const getServerSideProps = async ({ req, res }) => {
    const data = {
        "message": req.flash("message")
    }
    return {
        props: { data }
    }
}