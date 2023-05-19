import SoalCard from "@/components/Admin/Card/SoalCard";
import Button from "@/components/Button";
import AddIcon from '@mui/icons-material/Add';

const Soal = ({ data }) => {
    const subtryout = data.subtryout[0]
    console.log(subtryout.soal)
    let soalCounter = 0

    return (
        <>
            <section>
                <h1 className="mb-3">{data.nama + " > " + subtryout.nama + " > Soal"} </h1>
                <Button className="bg-green mb-3">
                    <AddIcon />
                    Create
                </Button>
                <section className="">
                    {
                        subtryout.soal.map(soal => <SoalCard key={soal._id} noSoal={++soalCounter} isi={soal.isi} bobot={soal.bobot} pilihan={soal.pilihan} />)
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