import TryoutCard from "@/components/Admin/TryoutCard";
import SearchBar from "@/components/Admin/SearchBar";
import { useState, useEffect } from "react";
import TestImage from "@/public/pict.png"
import axios from "axios";
import getUrl from "@/utils/getUrl";

const Tryout = () => {
    const [searchText, setSearchText] = useState("")
    const [tryouts, setTryouts] = useState([])

    const url = getUrl()

    const getTryouts = () => {
        axios({
            method: "get",
            url: `${url}/api/tryouts`,
        }).then(res => {
            const tryout = res.data
            setTryouts(tryout)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getTryouts()
    }, [])

    return (
        <>
            <SearchBar setText={setSearchText} />
            <section>
                <h1 className="mb-3">Tryout</h1>
                <section className="grid grid-cols-4 gap-3 p-8 bg-white">
                    {
                        tryouts.map(tryout => <TryoutCard key={tryout._id} image={TestImage} title={tryout.nama} date={tryout.created_at} href={`/admin/subtryout/${tryout._id}`} />)
                    }
                </section>
            </section>
        </>
    );
}

export default Tryout;