
import { cookies } from "next/headers";

export async function POST(res) {
    const data = await res.json()
    const tokenJWT = await fetch('http://localhost/payam/-/server/getUser/', {
        cache: "no-cache",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const token = await tokenJWT.json()
    cookies().set("Token_User", token, {
        httpOnly: true,
        secure: true,
    })

    return Response.json(token)
}