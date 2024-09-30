import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';


export default async function Middleware(request) {

    if (request.nextUrl.pathname.startsWith('/panel')) {
        const jwt = require('jsonwebtoken');
        const token = cookies().get("Token_User")
        if (token == undefined) {
            return NextResponse.rewrite(new URL('/laginOrLagout', request.url))
        }
        const tokenUser = jwt.decode(token.value, true)
        if (tokenUser.data.user_type == "user") {
            return NextResponse.rewrite(new URL('/laginOrLagout', request.url))
        }
    }
}