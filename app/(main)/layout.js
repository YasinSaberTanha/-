import "./globals.css";
import { vazir } from "../fonts/font";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import DataSettings from "../layout/dataSetting/settings";


const setting = await DataSettings()

export const metadata = {
    title: setting?.title_web,
    description: setting?.description_web,
    icons: {
        icon: `/setting/${setting?.favicon}`
    },
    keywords: setting?.keywords.split(",")
};

export default async function RootLayout({ children }) {



    return (
        <html lang="fa-IR" dir="rtl">
            <body className={vazir.className}>
                <Header />
                {children}
                <Footer footerText={setting.footer} />
            </body>
        </html>
    );
}
