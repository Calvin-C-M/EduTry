import { useState } from "react";
import Button from "@/components/Button";

const SoalModal = ({ id, isi, bobot, pilihan, setShowModal }) => {
    const [isiForm, setIsi] = useState(isi || "")
    const [bobotForm, setBobot] = useState(bobot || 0)
    const [pilihan1, setPilihan1] = useState("")
    const [pilihan2, setPilihan2] = useState("")
    const [pilihan3, setPilihan3] = useState("")
    const [pilihan4, setPilihan4] = useState("")
    const [jawaban, setJawaban] = useState("")

    return (
        <>
            <div className="relative flex items-center">
                <section className="bg-white p-5 rounded-md absolute w-full z-20 mt-80">
                    <h2 className="mb-3">Create Tryout</h2>
                    <form action="/add/soal" method="post" className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="isi">Isi</label>
                            <textarea 
                                name="isi" 
                                id="isi" 
                                cols="30" 
                                rows="5"
                                onChange={e => setIsi(e.target.value)}
                                className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100 resize-none"
                            >{isiForm}</textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pilihan-1">Pilihan</label>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <input 
                                        id="pilihan-1"
                                        name="pilihan_1"
                                        type="text" 
                                        placeholder="A"
                                        onChange={e => setPilihan1(e.target.value)}
                                        className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                                    />
                                    <input type="radio" name="jawaban" id="jawaban-1" value={pilihan1} onChange={e => setJawaban(e.target.value)} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input 
                                        id="pilihan-2"
                                        name="pilihan_2"
                                        type="text" 
                                        placeholder="B"
                                        onChange={e => setPilihan2(e.target.value)}
                                        className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                                    />
                                    <input type="radio" name="jawaban" id="jawaban-2" value={pilihan2} onChange={e => setJawaban(e.target.value)} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input 
                                        id="pilihan-3"
                                        name="pilihan_3"
                                        type="text" 
                                        placeholder="C"
                                        onChange={e => setPilihan3(e.target.value)}
                                        className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                                    />
                                    <input type="radio" name="jawaban" id="jawaban-3" value={pilihan3} onChange={e => setJawaban(e.target.value)} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input 
                                        id="pilihan-4"
                                        name="pilihan_4"
                                        type="text" 
                                        placeholder="D"
                                        onChange={e => setPilihan4(e.target.value)}
                                        className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                                    />
                                    <input type="radio" name="jawaban" id="jawaban-4" value={pilihan4} onChange={e => setJawaban(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="bobot">Bobot</label>
                            <input 
                                id="bobot"
                                name="bobot"
                                type="number" 
                                value={bobotForm}
                                onChange={(e) => setBobot(e.target.value)}
                                className="bg-white border-gray border-2 rounded-md px-2 py-1 focus:outline-none focus:border-primary transition-all duration-100"
                            />
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
 
export default SoalModal;