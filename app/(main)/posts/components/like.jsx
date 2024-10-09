"use client"

import { FaHeart } from "react-icons/fa";
import { useRef, useState } from "react";
export default function Like({ likes, postId }) {
    const [like, setLiks] = useState(likes)
    const refLike = useRef(likes)


    const Like = async () => {
        const formData = new FormData()
        formData.append("likes", likes)
        formData.append("post_id", postId)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/postLikes/`, {
                method: "POST",
                body: formData
            }).then(res => res.json())

            refLike.current.disabled = true
            setLiks(e => e + 1)
        } catch (err) {
            console.log(err);
        }
    }

    return <button onClick={Like} ref={refLike}><span className="like_span"><b>{like}</b></span><FaHeart className="icon_heart" /></button>

}