import Button from "../../Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import axios from "axios";
import getBaseUrl from "@/utils/getBaseUrl";

const SubTryoutCard = ({ id, judul, waktu, soal }) => {
    const baseUrl = getBaseUrl()

    const deleteSubTryout = () => {
        axios({
            method: "delete",
            url: `${baseUrl}/api/subtryout/${id}`
        })
    }

    return (
        <div className="border-2 border-blue-dark rounded-md px-5 py-2 flex items-center justify-between gap-24">
            <div>
                <h3 className="w-48">{judul}</h3>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <TextSnippetOutlinedIcon />
                        <span>{soal}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <AccessTimeOutlinedIcon />
                        <span>{waktu}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button className="px-[10px] bg-yellow-400" href={`/admin/soal/${id}`} >
                    <EditIcon />
                </Button>
                <Button className="px-[10px] bg-red" onClick={deleteSubTryout}>
                    <DeleteIcon />
                </Button>
            </div>
        </div>
    );
}
 
export default SubTryoutCard;