
import { vazir } from "../fonts/font";
import "./globals.css"
import PanelHeader from "../layout/panelHeader/panelHeader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



import DataSettings from "../layout/dataSetting/settings";

const setting = await DataSettings()
export const metadata = {
  title: "Panel",
  description: setting?.description_web,
  icons: {
    icon: `/setting/${setting?.favicon}`
  },
  keywords: setting?.keywords.split(",")
};
export default function RootLayout({ children }) {
  return (

    <html lang="fa-IR" dir="rtl">
      <body className={vazir.className}>
        <ToastContainer rtl />
        <PanelHeader />
        {children}
      </body>
    </html>
  );
}
