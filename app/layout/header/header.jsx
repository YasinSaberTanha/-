import "./header.css";
import { cookies } from "next/headers";
import MobileFerst from "./mobileFerst";
import Link from "next/link";

export default function Header({ logo }) {
  const cookie = cookies().get("Token_User");

  return (
    <div className="nav_continer">
      <header className="header">
        <Link href={"/"} className="logo">
          {logo}
        </Link>

        <MobileFerst cookie={cookie} />
      </header>
    </div>
  );
}
