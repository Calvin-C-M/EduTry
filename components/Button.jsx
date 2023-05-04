import Link from "next/link";

const Button = ({ children, href, className }) => {
    if(href) {
        return (
            <Link href={href} className={className + " bg-primary font-bold text-white flex items-center justify-center px-8 py-1 w-fit hover:brightness-110 transition-all duration-100"}>
                {children}
            </Link>
        );        
    }
    return (
        <button className={className + " bg-primary font-bold text-white flex items-center justify-center px-8 py-1 w-fit hover:brightness-110 transition-all duration-100"}>
            {children}
        </button>
    );
}
 
export default Button;