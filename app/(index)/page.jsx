
import Nav from "./components/nav";
import ImgesAndVideo from "./components/imgesAndVideo";


export default async function Home() {
  const res = await fetch("http://localhost/payam/-/server/getSettings/", { cache: "no-cache" }).then(res => res.json())
  const setting = res

  return (
    <>
      <Nav setting={setting} />
      <ImgesAndVideo setting={setting} />
    </>
  );
}