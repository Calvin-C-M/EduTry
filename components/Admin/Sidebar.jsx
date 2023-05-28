import Image from "next/image";
import Profile from "@/public/profile.jpg"
import Link from "next/link";
import getPathname from "@/utils/getPathname";
import Button from "./Button";

const Sidebar = () => {
    const navLinks = [
        { id: 1, name: "Pembayaran", href: "/admin/pembayaran" },
        { id: 2, name: "Tryout", href: "/admin/tryout" },
        { id: 3, name: "Konsultasi", href: "/admin/konsultasi" },
        { id: 4, name: "Profile", href: "/admin/profile" },
    ]

    const pathname = getPathname()

    const LinkList = (name, href) => (
        <Link 
            href={href} 
            className={"px-3 py-2 hover:font-bold rounded-md transition-all duration-100 " + ((pathname.includes(name.toLowerCase())) ? "font-bold" : "")}
        >
            {name}
        </Link>
    )

    return (
        <nav className="fixed left-0 top-0 bottom-0 bg-primary px-5 py-5 flex flex-col gap-8 text-white">
            <div className="flex flex-col items-center gap-2">
                <Image 
                    src={Profile}
                    className="rounded-full w-16 h-16"
                    alt="Profile"
                />
                <span>Admin</span>
            </div>
            <div className="flex flex-col">
                {
                    navLinks.map(links => LinkList(links.name, links.href))
                }
            </div>
            <Button className="bg-white font-bold text-primary flex items-center justify-center px-8 py-1 w-full">
                Logout
            </Button>
        </nav>
    );
}
 
export default Sidebar;