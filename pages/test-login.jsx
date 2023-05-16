import { useState } from "react";
import Button from "@/components/Button";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="pt-36">
                <form action="/control/login" method="post">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username" 
                            name="username"
                            type="text" 
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password"
                            name="password"
                            type="text" 
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <Button>
                        Login
                    </Button>
                </form>
            </div>
        </>
    );
}
 
export default Login;