import TryoutCard from "@/components/Admin/Card/TryoutCard";
import { useState, useEffect } from "react";
import TestImage from "@/public/pict.png"
import axios from "axios";
import getUrl from "@/utils/getBaseUrl";
import Button from "@/components/Button";
import AddIcon from '@mui/icons-material/Add';
import TryoutModal from "@/components/Admin/Modal/TryoutModal";

const Tryout = () => {
    const [tryouts, setTryouts] = useState([])
    const [showFormModal, setShowFormModal] = useState(false)

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
            <section>
                <h1 className="mb-3">Tryout</h1>
                <Button className="bg-green mb-3" onClick={() => setShowFormModal(!showFormModal)}>
                    <AddIcon />
                    Create
                </Button>
                {
                    (showFormModal) ? <TryoutModal setShowModal={() => setShowFormModal(false)}/> : ""
                }
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