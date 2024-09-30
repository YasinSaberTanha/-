import "./globals.css"

import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="acant"><Link href={"/panel/sms/78"}><h1>yasin_saber</h1></Link><span>2</span></div>
      <hr />
      <div className="acant"><Link href={"lk"}><h1>milad</h1></Link><span>2</span></div>
      <hr />
      <div className="acant"><Link href={"lk"}><h1>payam</h1></Link><span>2</span></div>
      <hr />
    </>
  );
}