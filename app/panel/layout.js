
import { vazir } from "../fonts/font";
import "./globals.css"
import PanelHeader from "../layout/panelHeader/panelHeader";

export const metadata = {
  title: "Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={vazir.className}>
        <PanelHeader />
        {children}
      </body>
    </html>
  );
}
