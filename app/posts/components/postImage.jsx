
import { FaComment } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import Like from "./like";
export default function PostImage({ post }) {




    // const size = windowSize > 992 ? true : false






    //     {
    //         vertical: { height: "400px", width: "230px", margin: "0px auto 40px 0px" },
    //         horizontal: { height: "230px", margin: "0px auto 40px 0px" }
    //     }
    // { gridTemplateRows: "60px 310px 45px" } : { gridTemplateRows: "60px 140px 45px" }
    return (
        <>
            <div className="post">
                <div className={post.mode == "vertical" ? "post_info_vertical post_info" : "post_info"}>
                    <h1>{post.title}</h1>
                    <p ><b>{post.description}</b></p>
                    <div>
                        <Like likes={post.likes} postId={post.post_id} />
                        <Link className="link_comment" href={`posts/${post.post_id}`}><span><b>{post.comment}</b></span><FaComment className="icon_comment" /></Link>
                        <span><b>{post.date_create}</b></span>
                    </div>
                </div>
                <Image src={`/files/${post.file}`} className={post.mode == "vertical" ? "vertical" : ""} width={300} height={200} alt="image" />
            </div>
            <hr />
        </>
    );
}