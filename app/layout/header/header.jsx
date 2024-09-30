
import "./header.css"
import Link from "next/link";

export default function Header() {
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
                        {/*----- ورود -----*/}
                        <Link href={'/laginOrLagout'} className="ui-btn">
                            <span>
                                ورود
                            </span>
                        </Link>
                        {/*------ خروج ------*/}
                        <button className="Btn" dir="ltr" style={{ display: "none" }}>
                            <div className="sign">
                                <svg viewBox="0 0 512 512">
                                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                </svg>
                            </div>
                            <div className="text">خروج</div>
                        </button>
                    </div>

                </div>


            </header>
        </div>
    );
}
