import { useRouter } from "next/router";

const getPathname = () => {
    const route = useRouter()
    return route.pathname.split("/")
}
 
export default getPathname;