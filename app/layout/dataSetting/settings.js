export default async function DataSettings() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/getSettings/`, { cache: "no-cache" })
        .then(res => res.json())

    return data
}