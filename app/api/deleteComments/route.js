import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";


export async function POST(res) {
    const formData = await res.formData()
    formData.append("user_jwt", cookies().get("Token_User").value)

    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/deleteComments/`, {
            cache: "no-cache",
            method: "POST",
            body: formData
        })

        if (res.ok) {
            revalidateTag("getUserPanel")
        }

        return NextResponse.json(res)
    }
    catch (err) {
        console.log(err);
        return NextResponse(err)
    }


}