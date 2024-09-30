import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(res) {

    const formData = await res.formData()

    formData.append("user_jwt", cookies().get("Token_User").value)
    try {
        const data = fetch("http://localhost/payam/-/server/postPost/", {
            cache: "no-cache",
            method: "POST",
            body: formData
        }).then(res => res.json()).then(res => console.log(res))



        

        return NextResponse.json(data)
    }
    catch (err) {
        console.log("ERR =====> " + err);
        return NextResponse(err)
    }


}