
import Nav from "./components/nav";
import ImgesAndVideo from "./components/imgesAndVideo";
import DataSettings from "../layout/dataSetting/settings";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";

export default async function Home() {
  const setting = await DataSettings()

  return (
    <>
      <Header />
      <Nav setting={setting} />
      <ImgesAndVideo setting={setting} />
      <Footer />
    </>
  );
}