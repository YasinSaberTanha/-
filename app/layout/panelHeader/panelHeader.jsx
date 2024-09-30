import Link from "next/link"

export default function PanelHeader() {
    return (
        <header>
            <Link href={"/panel"}>Panel</Link>
            <div className="mobile_ferst">
                <Link href={"/panel/posts"}>پست ها</Link>
                <Link href={"/panel/settings"}>تنظیمات</Link>
                <Link href={"/panel/about"}>درباره من</Link>
                <Link href={"/panel/sms"}>پیام ها</Link>
            </div>
        </header>
    )
}