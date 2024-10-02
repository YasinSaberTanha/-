import Link from "next/link";
import CheckLogin from "./checkLogin";

export default function Item({ cookie }) {
    return (
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
    )
}