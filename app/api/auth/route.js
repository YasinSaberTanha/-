
import { cookies } from "next/headers";

export async function POST(res) {

    
    console.log(process.env);
    

    const data = await res.json()
    const tokenJWT = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/getUser/`, {
        cache: "no-cache",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const token = await tokenJWT.json()
    console.log(tokenJWT);

    cookies().set("Token_User", token, {
        httpOnly: true,
        secure: true,
    })

    return Response.json(token)
}