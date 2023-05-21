import Button from "@/components/Button";
import { useState } from "react";

const TestTryout = () => {
    const [nama, setNama] = useState("")
    const [harga, setHarga] = useState(10000)
    const [deadline, setDeadline] = useState(new Date().toJSON().slice(0, 10))

    return (
        <>
            <div>
                <form action="/add/tryout" method="post">
                    <div>
                        <label htmlFor="nama">Nama</label>
                        <input 
                            id="nama"
                            name="nama"
                            type="text" 
                            onChange={e => setNama(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="harga">Harga</label>
                        <input 
                            id="harga"
                            name="harga"
                            type="number" 
                            onChange={e => setHarga(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="deadline">Deadline</label>
                        <input 
                            id="deadline"
                            name="deadline"
                            type="date" 
                            onChange={e => setDeadline(e.target.value)}
                        />
                    </div>
                    <Button>
                        Create
                    </Button>
                </form>
            </div>
        </>
    );
}
 
export default TestTryout;