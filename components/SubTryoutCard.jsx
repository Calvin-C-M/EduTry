import Link from "next/link";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const SubTryoutCard = ({ judul, waktu, soal, href, disabled }) => {
    return (
        <div className="relative border-2 border-primary rounded-lg p-3 flex items-center justify-between">
            {
                (disabled) 
                ? <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-dark opacity-50 hover:cursor-not-allowed"></div>
                : ""

            }
            <div className="flex flex-col gap-3">
                <h3 className="text-primary">{judul}</h3>
                <span className="flex items-center gap-3 text-sm">
                    <TextSnippetOutlinedIcon />
                    <span className="flex items-center gap-0.5">
                        <span>
                            {soal}
                        </span>
                        Soal
                    </span>
                </span>
                <span className="flex items-center gap-3 text-sm">
                    <AccessTimeOutlinedIcon />
                    <span className="flex items-center gap-0.5">
                        <span>
                            {waktu}
                        </span>
                        Menit
                    </span>
                </span>
            </div>
            <Link href={href} className="border-2 border-primary hover:bg-blue-light rounded-full text-primary p-1 transition-all duration-100">
                <ArrowForwardOutlinedIcon />
            </Link>
        </div>
    );
}
 
export default SubTryoutCard;