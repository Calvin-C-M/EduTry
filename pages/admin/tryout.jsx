import TryoutCard from "@/components/Admin/TryoutCard";
import SearchBar from "@/components/Admin/SearchBar";
import { useState } from "react";
import TestImage from "@/public/pict.png"

const Tryout = () => {
    const [searchText, setSearchText] = useState("")

    const tryoutData = [
        { id: 1, title:"Tryout #1", date: "dd/mm/yyyy", href:"#" },
        { id: 2, title:"Tryout #2", date: "dd/mm/yyyy", href:"#" },
        { id: 3, title:"Tryout #3", date: "dd/mm/yyyy", href:"#" },
        { id: 4, title:"Tryout #4", date: "dd/mm/yyyy", href:"#" },
        { id: 5, title:"Tryout #5", date: "dd/mm/yyyy", href:"#" },
        { id: 6, title:"Tryout #6", date: "dd/mm/yyyy", href:"#" },
        { id: 7, title:"Tryout #7", date: "dd/mm/yyyy", href:"#" },
        { id: 8, title:"Tryout #8", date: "dd/mm/yyyy", href:"#" },

    ]

    return (
        <>
            <SearchBar setText={setSearchText} />
            <section className="">
                <h1 className="">Tryout</h1>
                <section className="grid grid-cols-4 gap-3 p-8 mt-3 bg-white">
                    {
                        tryoutData.map(data => <TryoutCard key={data.id} image={TestImage} title={data.title} date={data.date} href={data.href}  />)
                    }
                </section>
            </section>
        </>
    );
}

export default Tryout;