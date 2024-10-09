import "./footer.css";
import DataSettings from "../dataSetting/settings";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";
export default async function Footer() {

    const setting = await DataSettings()
    return (
        <footer>
            <div className="artbat">
                <div>
                    <Link href={`instagram://user?username=${setting.instagram}`}>{setting.instagram}</Link>
                    <RiInstagramFill className="icon_instagram" />
                </div>

                <div>
                    <Link href={`tg://user?id=${setting.telegram}`}>{setting.telegram}</Link>
                    <FaTelegram className="icon_telegram" />
                </div>

                <div>
                    <Link href={`tel:${setting.phone}`}>{setting.phone}</Link>
                    <BsTelephoneFill className="icon_phone" />
                </div>

            </div>
            <div dangerouslySetInnerHTML={{ __html: setting.footer }} className="matlab"></div>
        </footer>
    )
}