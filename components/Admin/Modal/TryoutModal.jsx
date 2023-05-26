import { useState } from "react";
import Button from "../../Button";

const TryoutModal = ({ id, nama, deadline, harga, status, setShowModal }) => {
    const [namaForm, setNama] = useState(nama || "")
    const [deadlineForm, setDeadline] = useState(deadline || new Date().toJSON().slice(0, 10))
    const [hargaForm, setHarga] = useState(harga || 10000)
    const [statusForm, setStatus] = useState(status || "CLOSED")

    return (
        <>
            <div className="relative flex items-center">
                <section className="bg-white p-5 rounded-md absolute w-full z-20 mt-40">
                    <h2 className="mb-3">Create Tryout</h2>
                    <form action="/add/tryout" method="post" className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nama">Nama</label>
                            <input 
                                id="nama"
                                name="nama"
                                type="text" 
                                value={namaForm}
                                onChange={(e) => setNama(e.target.value)}
                                className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="harga">Harga</label>
                            <input 
                                id="harga"
                                name="harga"
                                type="number" 
                                value={hargaForm}
                                onChange={(e) => setHarga(e.target.value)}
                                className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="deadline">Deadline</label>
                            <input 
                                id="deadline"
                                name="deadline"
                                type="date" 
                                value={deadlineForm}
                                onChange={(e) => setDeadline(e.target.value)}
                                className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="status">Status</label>
                            <select 
                                name="status" 
                                id="status" 
                                onChange={e => setStatus(e.target.value)}
                                className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                            >
                                <option value="CLOSED">CLOSED</option>
                                <option value="OPENED">OPENED</option>
                            </select>
                        </div>
                        <input 
                            id="id"
                            name="id"
                            type="hidden" 
                            value={id}
                        />
                        <div className="flex justify-end">
                            <Button>
                                Simpan
                            </Button>
                        </div>
                    </form>
                </section>
                <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-70 z-10 hover:cursor-pointer" onClick={setShowModal}></div>
            </div>
        </>
    );
}
 
export default TryoutModal;