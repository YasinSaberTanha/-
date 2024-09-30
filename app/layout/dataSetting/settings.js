export default async function DataSettings() {
    const data = await fetch("http://localhost/payam/-/server/getSettings/", { cache: "no-cache" })
        .then(res => res.json())

    return data
}