import SearchBar from "@/components/Admin/SearchBar";
import SubTryoutLayout from "@/components/Admin/SubTryoutLayout";
import SubTryoutCard from "@/components/Admin/Card/SubTryoutCard";
import Button from "@/components/Button";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import SubTryoutModal from "@/components/Admin/Modal/SubTryoutModal";

const SubTryout = ({ data }) => {
    const [searchText, setSearchText] = useState("")
    const [showModalForm, setShowModalForm] = useState(false)

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
                            <SubTryoutCard judul={"Penalaran Umum"} waktu={20} soal={20} />
                            <SubTryoutCard judul={"Penalaran Umum"} waktu={20} soal={20} />
                            <SubTryoutCard judul={"Penalaran Umum"} waktu={20} soal={20} />
                            <SubTryoutCard judul={"Penalaran Umum"} waktu={20} soal={20} />
                            <SubTryoutCard judul={"Penalaran Umum"} waktu={20} soal={20} />
                            <SubTryoutCard judul={"Penalaran Umum"} waktu={20} soal={20} />
                        </SubTryoutLayout>
                    </section>
                    <section>
                        <h2 className="text-center mb-2">Literasi & PNM</h2>
                        <SubTryoutLayout>
                            <SubTryoutCard judul={"Literasi dalam Bahasa Indonesia"} waktu={20} soal={20} />
                            <SubTryoutCard judul={"Literasi dalam Bahasa Indonesia"} waktu={20} soal={20} />
                            <SubTryoutCard judul={"Literasi dalam Bahasa Indonesia"} waktu={20} soal={20} />
                            <SubTryoutCard judul={"Literasi dalam Bahasa Indonesia"} waktu={20} soal={20} />
                        </SubTryoutLayout>
                    </section>
                </section>
            </div>
        </>
    );
}

export const getServerSideProps = async ({ req, res }) => {
    const data = res.tryout

    return {
        props: { data }
    }
}
 
export default SubTryout;