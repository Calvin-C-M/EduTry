import SubTryoutLayout from "@/components/Admin/SubTryoutLayout";
import SubTryoutCard from "@/components/Admin/Card/SubTryoutCard";
import Button from "@/components/Button";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import SubTryoutModal from "@/components/Admin/Modal/SubTryoutModal";
import getBaseUrl from "@/utils/getBaseUrl";

const SubTryout = ({ data }) => {
    const [showModalForm, setShowModalForm] = useState(false)

    console.log(data)

    return (
        <>
            <div>
                <h1 className="mb-3">{data.nama} {'>'} Sub Tryout</h1>
                <Button className="bg-green mb-3" onClick={() => setShowModalForm(!showModalForm)}>
                    <AddIcon />
                    Create
                </Button>
                {
                    (showModalForm) 
                    ? <SubTryoutModal idTryout={data.id} setShowModal={() => setShowModalForm(false)} /> 
                    : ""
                }
                <section className="flex flex-col items-center gap-5 p-5 bg-white">
                    <section>
                        <h2 className="text-center mb-2">TPS</h2>
                        <SubTryoutLayout>
                            {
                                data.subtryout.map(subtryout => (subtryout.jenis == "TPS") ? <SubTryoutCard key={subtryout._id} id={subtryout._id} judul={subtryout.nama} waktu={subtryout.waktu_pengerjaan} soal={subtryout.soal.length} /> : "")
                            }
                        </SubTryoutLayout>
                    </section>
                    <section>
                        <h2 className="text-center mb-2">Literasi & PNM</h2>
                        <SubTryoutLayout>
                            {
                                data.subtryout.map(subtryout => (subtryout.jenis == "PNM") ? <SubTryoutCard key={subtryout._id} id={subtryout._id} judul={subtryout.nama} waktu={subtryout.waktu_pengerjaan} soal={subtryout.soal.length} /> : "")
                            }
                        </SubTryoutLayout>
                    </section>
                </section>
            </div>
        </>
    );
}

export const getServerSideProps = async ({ req, res }) => {
    const data = req.session.tryout

    return {
        props: { data }
    }
}
 
export default SubTryout;