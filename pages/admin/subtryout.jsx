import SearchBar from "@/components/Admin/SearchBar";
import SubTryoutLayout from "@/components/Admin/SubTryoutLayout";
import SubTryoutCard from "@/components/Admin/SubTryoutCard";
import Button from "@/components/Button";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

const SubTryout = () => {
    const [searchText, setSearchText] = useState("")

    return (
        <>
            <SearchBar setText={setSearchText} />
            <div>
                <h1 className="mb-3">Sub Tryout - Tryout #3</h1>
                <Button className="bg-green mb-3">
                    <AddIcon />
                    Create
                </Button>
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
 
export default SubTryout;