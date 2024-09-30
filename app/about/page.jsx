


export default async function About() {
  const data = await fetch("http://localhost/payam/-/server/getAbout/", { cache: "force-cache" })
    .then(res => res.json())


  return (
    <div className="nav_continer">
      <section dangerouslySetInnerHTML={{ __html: data.descriptions_about }}>
      </section>
    </div>
  );
}