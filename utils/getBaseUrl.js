const getBaseUrl = () => {
    const port = process.env.PORT || 3000
    const hostname = process.env.HOSTNAME || "edutry-production.up.railway.app"

    return `https://${hostname}`
}
 
export default getBaseUrl;