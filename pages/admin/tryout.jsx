import SearchBar from "@/components/Admin/SearchBar";
import { useState } from "react";

const Tryout = () => {
    const [searchText, setSearchText] = useState("")

    return (
        <>
            <SearchBar setText={setSearchText} />
            <div>
                <h1 className="">Tryout</h1>
            </div>
        </>
    );
}

export default Tryout;