import Button from "@/components/Button";
import GroupsIcon from '@mui/icons-material/Groups';
import TimeBubble from "@/components/TimeBubble";
import { useEffect, useState } from "react";
import SubTryoutCard from "@/components/SubTryoutCard";

const IntroTryout = ({ data }) => {
    const [tryoutSet, setTryoutSet] = useState("tps")

    const getMenitPengerjaan = () => {
        let totalWaktu = 0
        for(let subtryout of data.tryout.subtryout) {
            totalWaktu += subtryout.waktu_pengerjaan
        }
        return totalWaktu % 60
    }

    const getJamPengerjaan = () => {
        const totalMenit = getMenitPengerjaan()
        const totalJam = Math.floor(totalMenit / 60)

        return (totalJam > 0) ? totalJam : "00"
    }

    return (
        <>
            <div className="flex flex-col gap-3 mx-20">
                <section className="flex justify-between gap-10 bg-white rounded-lg px-14 py-12">
                    <section className="flex flex-col gap-3">
                        <h1 className="text-primary">{data.tryout.nama}</h1>
                        <span className="flex items-center gap-2 font-light">
                            <GroupsIcon />
                            EduTry System
                        </span>
                        <p className="max-w-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad repellat provident perspiciatis aliquid optio, earum dolores, aspernatur iusto vero expedita rerum harum omnis amet molestias eos esse magnam iure!
                        </p>
                        <Button href={`/questions/${data.tryout.subtryout[0]._id}`}>
                            Mulai
                        </Button>
                    </section>
                    <section className="text-center flex flex-col items-center justify-between gap-3">
                        <section className="flex flex-col gap-3">
                            <h3>Masa Pengerjaan</h3>
                            <span>{data.tryout.created_at} - {data.tryout.deadline}</span>
                        </section>
                        <section className="flex flex-col gap-3">
                            <h3>Durasi Pengerjaan</h3>
                            <section className="flex items-center gap-3">
                                <TimeBubble satuan="Jam" nilai={getJamPengerjaan()} />
                                <TimeBubble satuan="Menit" nilai={getMenitPengerjaan()} />
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
                                ((tryoutSet == "tps") ? "border-b-primary" : "font-normal")
                            }
                            onClick={() => setTryoutSet("tps")}
                        >TPS</h2>
                        <h2 
                            className={
                                "text-primary w-64 font-normal border-b-2 px-10 hover:font-bold hover:border-b-primary hover:cursor-pointer transition-all duration-100 "
                                +
                                ((tryoutSet == "literasi") ? "border-b-primary" : "font-normal")
                            }
                            onClick={() => setTryoutSet("literasi")}
                        >Literasi & PNM</h2>
                    </div>
                    {
                        (tryoutSet == "tps") ? <section className="grid grid-cols-2 gap-5 mt-5">
                            {
                                data.tryout.subtryout.map(subtryout => (subtryout.jenis == "TPS") ? <SubTryoutCard key={subtryout._id} judul={subtryout.nama} waktu={subtryout.waktu_pengerjaan} soal={subtryout.soal.length} href={`/questions/${subtryout._id}`} /> : "Tidak ada data")
                            }
                        </section> : <section className="grid grid-cols-2 gap-5 mt-5">
                            {
                                data.tryout.subtryout.map(subtryout => (subtryout.jenis == "PNM") ? <SubTryoutCard key={subtryout._id} judul={subtryout.nama} waktu={subtryout.waktu_pengerjaan} soal={subtryout.soal.length} href={`/questions/${subtryout._id}`} /> : "Tidak ada data")
                            }
                        </section>
                    }
                </section>
            </div>
        </>
    );
}

export const getServerSideProps = ({ req, res }) => {
    const data = {
        "mytryout": req.session.mytryout,
        "tryout": req.session.tryout
    }

    return {
        props: { data }
    }
}
 
export default IntroTryout;