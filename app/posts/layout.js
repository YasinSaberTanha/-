import Header from "../layout/header/header";
import { vazir } from "../fonts/font";
import "./globals.css"


import DataSettings from "../layout/dataSetting/settings";

const setting = await DataSettings()
export const metadata = {
  title: "Posts",
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
        <Header logo={setting?.logo}/>
        {children}
      </body>
    </html>
  );
}
