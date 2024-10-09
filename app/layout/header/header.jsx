import "./header.css";
import { cookies } from "next/headers";
import MobileFerst from "./mobileFerst";
import Link from "next/link";
import DataSettings from "../dataSetting/settings";

export default async function Header({ logo }) {
  const cookie = cookies().get("Token_User");
  const setting = await DataSettings()
  
  return (
    <div className="nav_continer">
      <header className="header">
        <Link href={"/"} className="logo">
          {setting.logo}
        </Link>

        <MobileFerst cookie={cookie} />
      </header>
    </div>
  );
}
