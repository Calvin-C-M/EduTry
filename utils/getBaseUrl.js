const getBaseUrl = () => {
    const port = process.env.PORT || 3000
    const hostname = process.env.HOSTNAME || "localhost"

    return `http://${hostname}:${port}`
}
 
export default getBaseUrl;