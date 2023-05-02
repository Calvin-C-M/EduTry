import Link from "next/link";

const Button = ({ children, href, className }) => {
    if(href) {
        return (
            <Link href={href} className={className + " bg-primary font-bold text-white flex items-center justify-center px-8 py-1 w-fit"}>
                {children}
            </Link>
        );        
    }
    return (
        <button className={className + " bg-primary font-bold text-white flex items-center justify-center px-8 py-1 w-fit"}>
            {children}
        </button>
    );
}
 
export default Button;