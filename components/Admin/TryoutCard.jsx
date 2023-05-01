import Image from "next/image";
import Button from "./Button";

const TryoutCard = ({ image, title, date, href }) => {
    return (
        <div className="bg-blue-dark py-5 px-10 flex flex-col items-center w-fit text-white gap-3">
            <Image 
                src={image}
                alt={title}
                className="w-32"
            />
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-lg">{title}</h3>
                <span>{date}</span>
                <Button href={href}>
                    Details
                </Button>
            </div>
        </div>
    );
}
 
export default TryoutCard;