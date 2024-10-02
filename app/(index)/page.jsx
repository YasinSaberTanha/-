
import Nav from "./components/nav";
import ImgesAndVideo from "./components/imgesAndVideo";
import DataSettings from "../layout/dataSetting/settings";

export default async function Home() {
  const setting = await DataSettings()

  return (
    <>
      <Nav setting={setting} />
      <ImgesAndVideo setting={setting} />
    </>
  );
}