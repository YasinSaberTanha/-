"use client"

import { RiDeleteBin6Line } from "react-icons/ri";
import { RiChatDeleteLine } from "react-icons/ri";

export default function DeletePost({ postid, file }) {
    const deletePost = async (id, file) => {

        const formData = new FormData()

        formData.append("file", file)
        formData.append("post_id", id)

        try {
            const res = await fetch("http://localhost:3000/api/deletePost", {
                method: "POST",
                body: formData
            })
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <td className="td_btn"><button onClick={() => deletePost(postid, file)} className="delete_user"><RiDeleteBin6Line /></button><button className="delete_Comment"><RiChatDeleteLine /></button></td>
    )
}