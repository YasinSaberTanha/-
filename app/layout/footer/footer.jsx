import "./footer.css";

import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import FooterText from "./footerText";

export default function Footer({ footerText }) {
    return (
        <footer>
            <div className="artbat">
                <div>
                    <a href="">payamghaanbarian</a>
                    <RiInstagramFill className="icon_instagram" />
                </div>

                <div>
                    <a href="">payamghaanbarian@</a>
                    <FaTelegram className="icon_telegram" />
                </div>

                <div>
                    <a href="">0915-926-1032</a>
                    <BsTelephoneFill className="icon_phone" />
                </div>

            </div>
            <div className="gaper" >

            </div>
            {<FooterText footerText={footerText} />}
        </footer>
    )
}