
import Caht from "../posts/components/chat"
import "./globals.css";
import Header from "@/app/layout/header/header";

export default async function ContactMe({ params }) {
  return (
    <>
    {<Header />}
    <Caht params={params} />
    </>
  )
}