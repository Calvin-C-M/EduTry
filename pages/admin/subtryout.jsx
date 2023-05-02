import SearchBar from "@/components/Admin/SearchBar";
import SubTryoutLayout from "@/components/Admin/SubTryoutLayout";
import SubTryoutCard from "@/components/Admin/SubTryoutCard";
import { useState } from "react";

const SubTryout = () => {
    const [searchText, setSearchText] = useState("")

    return (
        <>
            <SearchBar setText={setSearchText} />
            <div className="">
                <h1>Sub Tryout - Tryout #3</h1>
                <section className="flex flex-col items-center gap-5 bg-white">
                    <section>
                        <h2 className="text-center">TPS</h2>
                        <SubTryoutLayout>
                            <SubTryoutCard judul={"Penalaran Umum"} waktu={20} soal={20} />
                        </SubTryoutLayout>
                    </section>
                    <section>
                        <h2 className="text-center">Literasi & PNM</h2>
                    </section>
                </section>
            </div>
        </>
    );
}
 
export default SubTryout;