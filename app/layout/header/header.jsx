
import "./header.css"
import { cookies } from "next/headers"
import MobileFerst from "./mobileFerst";

export default function Header() {

    const cookie = cookies().get("Token_User")

    return (
        <div className="nav_continer">
            <header className="header" >
                <span className="logo">
                    PAYAM
                </span>

                <MobileFerst cookie={cookie} />

            </header>
        </div>
    );
}
