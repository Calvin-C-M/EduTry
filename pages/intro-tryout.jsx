import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import GroupsIcon from '@mui/icons-material/Groups';
import TimeBubble from "@/components/TimeBubble";
import { useState } from "react";
import SubTryoutCard from "@/components/SubTryoutCard";

const IntroTryout = () => {
    const [tryout,setTryout] = useState("tps")

    const testTpsData = [
        { id: 1, judul: "Penalaran Induktif", soal: 10, waktu: 20, href: "" },
        { id: 2, judul: "Penalaran Induktif", soal: 10, waktu: 20, href: ""  },
        { id: 3, judul: "Penalaran Induktif", soal: 10, waktu: 20, href: ""  },
        { id: 4, judul: "Penalaran Induktif", soal: 10, waktu: 20, href: ""  },
        { id: 5, judul: "Penalaran Induktif", soal: 10, waktu: 20, href: ""  },
        { id: 6, judul: "Penalaran Induktif", soal: 10, waktu: 20, href: ""  },

    ]

    const testLiterasiData = [
        { id: 1, judul: "Bahasa", soal: 10, waktu: 20, href: ""  },
        { id: 2, judul: "Bahasa", soal: 10, waktu: 20, href: ""  },
        { id: 3, judul: "Bahasa", soal: 10, waktu: 20, href: ""  },
        { id: 4, judul: "Bahasa", soal: 10, waktu: 20, href: ""  },
        { id: 5, judul: "Bahasa", soal: 10, waktu: 20, href: ""  },
        { id: 6, judul: "Bahasa", soal: 10, waktu: 20, href: ""  },
    ]

    return (
        <>
            {/* <Navbar /> */}
            <div className="flex flex-col gap-3 mx-20">
                <section className="flex justify-between gap-10 bg-white rounded-lg px-14 py-12">
                    <section className="flex flex-col gap-3">
                        <h1 className="text-primary">Tryout #1</h1>
                        <span className="flex items-center gap-2 font-light">
                            <GroupsIcon />
                            EduTry System
                        </span>
                        <p className="max-w-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad repellat provident perspiciatis aliquid optio, earum dolores, aspernatur iusto vero expedita rerum harum omnis amet molestias eos esse magnam iure!
                        </p>
                        <Button>
                            Mulai
                        </Button>
                    </section>
                    <section className="text-center flex flex-col items-center justify-between gap-3">
                        <section className="flex flex-col gap-3">
                            <h3>Masa Pengerjaan</h3>
                            <span>dd/mm/yyyy - dd/mm/yyyy</span>
                        </section>
                        <section className="flex flex-col gap-3">
                            <h3>Durasi Pengerjaan</h3>
                            <section className="flex items-center gap-3">
                                <TimeBubble satuan="Jam" nilai="00" />
                                <TimeBubble satuan="Menit" nilai="00" />
                                <TimeBubble satuan="Detik" nilai="00" />
                            </section>
                        </section>
                    </section>
                </section>
                <section className="bg-white rounded-lg px-14 py-12">
                    <div className="flex justify-center items-center text-center">
                        <h2 
                            className={
                                "text-primary w-64 border-b-2 px-10 hover:font-bold hover:border-b-primary hover:cursor-pointer transition-all duration-100 " 
                                +
                                ((tryout == "tps") ? "border-b-primary" : "font-normal")
                            }
                            onClick={() => setTryout("tps")}
                        >TPS</h2>
                        <h2 
                            className={
                                "text-primary w-64 font-normal border-b-2 px-10 hover:font-bold hover:border-b-primary hover:cursor-pointer transition-all duration-100 "
                                +
                                ((tryout == "literasi") ? "border-b-primary" : "font-normal")
                            }
                            onClick={() => setTryout("literasi")}
                        >Literasi & PNM</h2>
                    </div>
                    {
                        (tryout == "tps") ? <section className="grid grid-cols-2 gap-5 mt-5">
                            {
                                testTpsData.map(data => <SubTryoutCard key={data.id} judul={data.judul} waktu={data.waktu} soal={data.soal} href="" />)
                            }
                        </section> : <section className="grid grid-cols-2 gap-5 mt-5">
                            {
                                testLiterasiData.map(data => <SubTryoutCard key={data.id} judul={data.judul} waktu={data.waktu} soal={data.soal} href=""  />)
                            }
                        </section>
                    }
                    {/* <section className="grid grid-cols-2 gap-5 mt-5">
                        <SubTryoutCard judul="Penalaran Umum" waktu="20" soal="20" href="" />
                        <SubTryoutCard judul="Penalaran Umum" waktu="20" soal="20" href="" />
                        <SubTryoutCard judul="Penalaran Umum" waktu="20" soal="20" href="" />
                    </section> */}
                </section>
            </div>
        </>
    );
}
 
export default IntroTryout;