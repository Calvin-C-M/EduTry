import Link from "next/link";

const Button = ({ children, href, className }) => {
    if(href) {
        return (
            <Link href={href} className={"bg-primary font-bold text-white flex items-center justify-center px-8 py-1 w-fit " + className}>
                {children}
            </Link>
        );        
    }
    return (
        <button className={"bg-primary font-bold text-white flex items-center justify-center px-8 py-1 w-fit " + className}>
            {children}
        </button>
    );
}
 
export default Button;