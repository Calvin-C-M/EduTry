import Button from "@/components/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SoalCard = ({ noSoal, isi, pilihan, bobot }) => {
    return (
        <div className="flex flex-col gap-3 bg-white py-3 px-5">
            <div className="flex items-center gap-1">
                <h3 className="text-primary">Soal {noSoal}</h3>
                <span className="font-bold">({bobot})</span>
            </div>
            <p>
                {isi}
            </p>
            <div className="flex flex-col gap-3">
                {
                    pilihan.map(pil => <div key={pil} className="border-2 border-primary rounded-md py-1 px-3">
                        {pil}
                    </div>)
                }
            </div>
            <div className="flex justify-end items-center gap-3">
                <Button className="px-[10px] bg-yellow-400">
                    <EditIcon />
                </Button>
                <Button className="px-[10px] bg-red">
                    <DeleteIcon />
                </Button>
            </div>
        </div>
    );
}
 
export default SoalCard;