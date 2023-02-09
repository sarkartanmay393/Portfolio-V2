const getQoD = async () => {
    try {
        const resp = await fetch("https://quotes.rest/qod?category=inspire&language=en")
        const data = await resp.json()
        const quote = data.contents.quotes[0]
        return quote
    } catch (err) {
        console.log(err)
    }
}
export default getQoD