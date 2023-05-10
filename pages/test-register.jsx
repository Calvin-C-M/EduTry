import { useState } from "react";
import Button from "@/components/Button";

const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="pt-36">
                <form action="/control/register" method="post">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            name="email"
                            type="text" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            id="username"
                            name="username"
                            type="text" 
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password"
                            name="password"
                            type="text" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button>
                        Register
                    </Button>
                </form>
            </div>
        </>
    );
}
 
export default Register;