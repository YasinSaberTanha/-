import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function GET() {

    cookies().delete("Token_User")

    return NextResponse.json("cookiesDelete")
}