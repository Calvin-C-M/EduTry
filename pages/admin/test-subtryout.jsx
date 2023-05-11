import Button from "@/components/Button";
import { useState } from "react";

const TestSubTryout = ({ data }) => {
    const [nama, setNama] = useState("")
    const [jenis, setJenis] = useState("")
    const [waktu, setWaktu] = useState(10)

    console.log(data)

    return (
        <>
            <div>
                <form action="/add/subtryout" method="post">
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
                        <label htmlFor="jenis">Jenis</label>
                        <input 
                            id="jenis"
                            name="jenis"
                            type="text" 
                            onChange={e => setJenis(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="waktu_pengerjaan">Waktu</label>
                        <input 
                            id="waktu_pengerjaan"
                            name="waktu_pengerjaan"
                            type="number" 
                            onChange={e => setWaktu(e.target.value)}
                        />
                    </div>
                    <input type="hidden" name="id_tryout" value={data._id} />
                    <Button>
                        Create
                    </Button>
                </form>
            </div>
        </>
    );
}

export const getServerSideProps = async ({ res }) => {
    const data = res.tryout

    return {
        props: { data }
    }
}
 
export default TestSubTryout;