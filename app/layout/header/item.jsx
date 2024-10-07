
import Link from "next/link";
import CheckLogin from "./checkLogin";
import { useState } from "react"

export default function Item({ cookie }) {


    const [colors, setColors] = useState(localStorage.getItem("colors") == "dark" ? true : false)
    const root = document.documentElement.style

    const color = () => {
        if (!colors) {
            root.setProperty("--withe", "#edf2f4")
            root.setProperty("--blak", "#264653")
            root.setProperty("--grey", "#edf2f4")
            root.setProperty("--gray_med", "#607D8B")
            root.setProperty("--grey_dark", "#264653")
            root.setProperty("--red", "#E63946")
            root.setProperty("--red_dark", "#E63946")
            localStorage.setItem("colors", "lite")
        }
        else {
            root.setProperty("--withe", "#ffffff")
            root.setProperty("--blak", "#212121")
            root.setProperty("--grey", "#BDBDBD")
            root.setProperty("--gray_med", "#607D8B")
            root.setProperty("--grey_dark", "#757575")
            root.setProperty("--red", "#f44336")
            root.setProperty("--red_dark", "#d32f2f")
            localStorage.setItem("colors", "dark")

        }
    }
    color()



    return (
        <div className="mobile_ferst">
            <div className="mobile_ferst_div">
                <Link className="link_header" href="/posts">پست ها</Link>
                <Link className="link_header" href="/about">درباره من</Link>
                <Link className="link_header" href="/contactMe">ارتباط با من</Link>
            </div>


            <div className="checkbox_div">
                <input type="checkbox" name="checkbox" id="checkbox" checked={colors} onChange={() => { setColors(e => !e); }} />
                <label htmlFor="checkbox" className="label"> </label>

                <CheckLogin cookie={cookie} />
            </div>
        </div>
    )
}