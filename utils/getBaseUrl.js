const getBaseUrl = () => {
    const port = process.env.PORT || 3000
    const hostname = process.env.HOSTNAME || "localhost"

    return `https://${hostname}`
}
 
export default getBaseUrl;