import Link from "next/link";

const Button = ({ children, href, className, onClick, disabled }) => {
    if(href) {
        return (
            <Link href={href} className={className + " bg-primary rounded-md font-bold text-white flex items-center justify-center px-8 py-1 w-fit hover:brightness-110 transition-all duration-100"}>
                {children}
            </Link>
        );        
    }
    return (
        <button disabled={disabled} className={className + " bg-primary font-bold text-white flex items-center justify-center px-8 py-1 w-fit hover:brightness-110 transition-all duration-100"} onClick={onClick}>
            {children}
        </button>
    );
}
 
export default Button;