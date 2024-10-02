
import Link from "next/link";
import Image from "next/image";
import Description from "./description";



export default async function Nav({ setting }) {
    return (
        <nav className="nav">
            <div className="nav_continer">
                <div className="nav_item">
                    <div className="image_box">
                        <Image src={`/setting/${setting.image}`} width={300} height={300} alt="image" />
                    </div>
                    <div className="text_dox">
                        <div>
                            <h1>{setting.title}</h1>
                            {<Description description={setting.description} />}
                            <Link href={"/bu"} className="link_bu">درباره من</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

