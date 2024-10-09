import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(res) {

    const formData = await res.formData()

    formData.append("user_jwt", cookies().get("Token_User").value)
    try {
        const data = fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/postSettings/`, {
            cache: "no-cache",
            method: "POST",
            body: formData
        }).then(e => e.json()).then(e => console.log(e))

        return NextResponse.json(data)
    }
    catch (err) {
        console.log("ERR =====> " + err);
        return NextResponse(err)
    }


}