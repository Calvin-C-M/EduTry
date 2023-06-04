import { useState } from "react";
import Button from "../../Button";

const SubTryoutModal = ({ id, nama, jenis, waktuPengerjaan, idTryout, setShowModal }) => {
    const [namaForm, setNama] = useState(nama || "")
    const [jenisForm, setJenis] = useState(jenis || "TPS")
    const [waktuPengerjaanForm, setWaktuPengerjaan] = useState(waktuPengerjaan || 10)

    return (
        <>
            <div className="relative flex items-center">
                <section className="bg-white p-5 rounded-md absolute w-full z-20 top-1/2">
                    <h2 className="mb-3">Create Tryout</h2>
                    <form action="/add/subtryout" method="post" className="flex flex-col gap-3">
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
                            <label htmlFor="jenis">Jenis</label>
                            <select 
                                name="jenis" 
                                id="jenis" 
                                onChange={e => setJenis(e.target.value)}
                                className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                            >
                                <option value="TPS">TPS</option>
                                <option value="PNM">Literasi & PNM</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="waktu_pengerjaan">Waktu Pengerjaan</label>
                            <input 
                                id="waktu_pengerjaan"
                                name="waktu_pengerjaan"
                                type="number" 
                                value={waktuPengerjaanForm}
                                onChange={(e) => setWaktuPengerjaan(e.target.value)}
                                className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                            />
                        </div>
                        <div>
                            <input 
                                id="id"
                                name="id"
                                type="hidden" 
                                value={id}
                            />
                            <input 
                                id="id_tryout"
                                name="id_tryout"
                                type="hidden" 
                                value={idTryout}
                            />
                        </div>
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
 
export default SubTryoutModal;