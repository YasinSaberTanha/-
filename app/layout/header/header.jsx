
import CheckLogin from "./checkLogin";
import "./header.css"
import Link from "next/link";
import { cookies } from "next/headers"

export default function Header() {
    const cookie = cookies().get("Token_User")
    return (
        <div className="nav_continer">
            <header className="header" >
                <span className="logo">
                    PAYAM
                </span>
                <div className="mobile_ferst">
                    <div className="mobile_ferst_div">
                        <Link className="link_header" href="/posts">پست ها</Link>
                        <Link className="link_header" href="/about">درباره من</Link>
                        <Link className="link_header" href="/contactMe">ارتباط با من</Link>
                    </div>


                    <div className="checkbox_div">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="label"> </label>
                        <CheckLogin cookie={cookie} />
                    </div>

                </div>


            </header>
        </div>
    );
}
