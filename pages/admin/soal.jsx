import SoalCard from "@/components/Admin/Card/SoalCard";
import SoalModal from "@/components/Admin/Modal/SoalModal";
import Button from "@/components/Button";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";

const Soal = ({ data }) => {
    const [showModalForm, setShowModalForm] = useState(false)

    const subtryout = data.subtryout[0]
    let soalCounter = 0
    console.log(subtryout)

    return (
        <>
            <section>
                <h1 className="mb-3">{data.nama + " > " + subtryout.nama + " > Soal"} </h1>
                <Button className="bg-green mb-3" onClick={() => setShowModalForm(!showModalForm)}>
                    <AddIcon />
                    Create
                </Button>
                {
                    (showModalForm) ? <SoalModal id={subtryout._id} setShowModal={() => setShowModalForm(false)} /> : ""
                }
                <section className="">
                    {
                        subtryout.soal.map(soal => <SoalCard key={soal._id} id={subtryout._id} noSoal={++soalCounter} isi={soal.isi} bobot={soal.bobot} pilihan={soal.pilihan} />)
                    }
                </section>
            </section>
        </>
    );
}

export const getServerSideProps = async ({ req, res }) => {
    const data = req.session.tryout

    return {
        props: { data }
    }
}
 
export default Soal;