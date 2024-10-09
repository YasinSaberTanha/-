import Header from "@/app/layout/header/header";
import "./globals.css"
export default async function About() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/getAbout/`, { cache: "force-cache" })
    .then(res => res.json())

  return (
    <>
      <Header />
      <div className="nav_continer">
        <section dangerouslySetInnerHTML={{ __html: data.descriptions_about }}>
        </section>
      </div>
    </>
  );
}