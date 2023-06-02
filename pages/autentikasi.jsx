import Button from "@/components/Button"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { CheckOutlinedIcon } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
export default function Login(){
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
        if(query.message.length > 0) setErrorModal(true)
    }, [ asPath, query ]);
    return(
        <form action={isLogin ? "/control/login" : "/control/register"} method="post">
        <div className="flex ">
        <div className="w-1/2 h-[100vh] bg-[url('/wellcome.png')]">
            
        </div>
        <div className='w-1/2 px-10 md:px-28 pt-8 md:pt-20 bg-primary h-[100vh] flex justify-center items-center'>
        
        <div className="px-[50px] bg-blue-dark py-[25px] w-3/5 rounded">
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
                            <svg className="absolute top-3 left-2" width="21" height="13" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.35712 14.0503C8.56518 14.0503 7.88723 13.7268 7.32327 13.0799C6.75931 12.4331 6.47734 11.6554 6.47734 10.747C6.47734 9.83866 6.75931 9.06103 7.32327 8.41415C7.88723 7.76727 8.56518 7.44383 9.35712 7.44383C10.1491 7.44383 10.827 7.76727 11.391 8.41415C11.9549 9.06103 12.2369 9.83866 12.2369 10.747C12.2369 11.6554 11.9549 12.4331 11.391 13.0799C10.827 13.7268 10.1491 14.0503 9.35712 14.0503ZM9.35712 20.6567C6.9573 20.6567 4.91745 19.6932 3.23758 17.7664C1.55771 15.8395 0.717773 13.4997 0.717773 10.747C0.717773 7.99436 1.55771 5.65459 3.23758 3.72771C4.91745 1.80084 6.9573 0.837402 9.35712 0.837402C10.965 0.837402 12.4229 1.29159 13.7308 2.19998C15.0387 3.10836 16.0766 4.30578 16.8445 5.79222H29.5156L33.8353 10.747L27.3557 18.1793L24.476 15.7019L21.5962 18.1793L18.5364 15.7019H16.8445C16.0766 17.1883 15.0387 18.3857 13.7308 19.2941C12.4229 20.2025 10.965 20.6567 9.35712 20.6567ZM9.35712 17.3535C10.701 17.3535 11.8829 16.8855 12.9028 15.9496C13.9228 15.0137 14.6007 13.83 14.9367 12.3986H19.4364L21.5242 14.0915L24.476 11.5728L27.0318 13.8438L29.7316 10.747L28.2917 9.09543H14.9367C14.6007 7.66404 13.9228 6.48039 12.9028 5.54448C11.8829 4.60857 10.701 4.14062 9.35712 4.14062C7.77324 4.14062 6.41734 4.78749 5.28943 6.08125C4.16151 7.37501 3.59755 8.93027 3.59755 10.747C3.59755 12.5638 4.16151 14.1191 5.28943 15.4128C6.41734 16.7066 7.77324 17.3535 9.35712 17.3535Z" fill="#1C1B1F"/>
                            </svg>
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
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Email"/>
                            <svg className="absolute top-2 left-2" width="21" height="19" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.71355 20.2285C2.11959 20.2285 1.61113 19.9859 1.18816 19.5007C0.765195 19.0156 0.553711 18.4323 0.553711 17.751V2.88659C0.553711 2.2053 0.765195 1.62208 1.18816 1.13692C1.61113 0.651759 2.11959 0.40918 2.71355 0.40918H19.9922C20.5862 0.40918 21.0947 0.651759 21.5176 1.13692C21.9406 1.62208 22.1521 2.2053 22.1521 2.88659V17.751C22.1521 18.4323 21.9406 19.0156 21.5176 19.5007C21.0947 19.9859 20.5862 20.2285 19.9922 20.2285H2.71355ZM11.3529 11.5575L2.71355 5.364V17.751H19.9922V5.364L11.3529 11.5575ZM11.3529 9.08011L19.9922 2.88659H2.71355L11.3529 9.08011ZM2.71355 5.364V2.88659V17.751V5.364Z" fill="#1C1B1F"/>
                            </svg>
                        </div>
                        <div className="relative mt-5">
                            <input onChange={(e)=> setUsername(e.target.value)} value={username} type="text" className="w-full bg-white rounded-sm pl-9 py-2" placeholder="Username"/>
                            <svg className="absolute top-3 left-2" width="16" height="19" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.67255 10.4878C7.48464 10.4878 6.46771 10.0026 5.62178 9.03229C4.77584 8.06197 4.35288 6.89552 4.35288 5.53294C4.35288 4.17037 4.77584 3.00392 5.62178 2.0336C6.46771 1.06328 7.48464 0.578125 8.67255 0.578125C9.86046 0.578125 10.8774 1.06328 11.7233 2.0336C12.5693 3.00392 12.9922 4.17037 12.9922 5.53294C12.9922 6.89552 12.5693 8.06197 11.7233 9.03229C10.8774 10.0026 9.86046 10.4878 8.67255 10.4878ZM0.0332031 20.3974V16.929C0.0332031 16.2271 0.190691 15.5819 0.505667 14.9936C0.820643 14.4052 1.23911 13.9561 1.76107 13.6465C2.87699 13.0065 4.0109 12.5265 5.16281 12.2065C6.31473 11.8865 7.48464 11.7265 8.67255 11.7265C9.86046 11.7265 11.0304 11.8865 12.1823 12.2065C13.3342 12.5265 14.4681 13.0065 15.584 13.6465C16.106 13.9561 16.5245 14.4052 16.8394 14.9936C17.1544 15.5819 17.3119 16.2271 17.3119 16.929V20.3974H0.0332031ZM2.19304 17.92H15.1521V16.929C15.1521 16.7019 15.1026 16.4955 15.0036 16.3097C14.9046 16.1239 14.7741 15.9794 14.6121 15.8761C13.6402 15.3187 12.6592 14.9007 11.6693 14.6219C10.6794 14.3432 9.68047 14.2039 8.67255 14.2039C7.66462 14.2039 6.6657 14.3432 5.67577 14.6219C4.68585 14.9007 3.70492 15.3187 2.733 15.8761C2.57101 15.9794 2.44052 16.1239 2.34153 16.3097C2.24254 16.4955 2.19304 16.7019 2.19304 16.929V17.92ZM8.67255 8.01035C9.2665 8.01035 9.77496 7.76777 10.1979 7.28261C10.6209 6.79746 10.8324 6.21423 10.8324 5.53294C10.8324 4.85166 10.6209 4.26843 10.1979 3.78327C9.77496 3.29811 9.2665 3.05553 8.67255 3.05553C8.07859 3.05553 7.57013 3.29811 7.14716 3.78327C6.7242 4.26843 6.51271 4.85166 6.51271 5.53294C6.51271 6.21423 6.7242 6.79746 7.14716 7.28261C7.57013 7.76777 8.07859 8.01035 8.67255 8.01035Z" fill="#1C1B1F"/>
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
                                {   query.message[0] == "Pendaftaran berhasil!" ?
                                        <CheckOutlinedIcon className="text-green text-5xl"/>
                                    :
                                        <CancelOutlinedIcon className="text-red text-5xl"/>
                                }
                                <h3 class="mb-5 text-lg font-normal text-black dark:text-black">{query.message[0]}</h3>
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
        
    )
}

Login.getInitialProps = async () => {
    return {}
}