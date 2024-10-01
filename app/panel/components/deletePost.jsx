"use client"

import { RiDeleteBin6Line } from "react-icons/ri";
import { RiChatDeleteLine } from "react-icons/ri";
import { useState } from "react";
import Loding from "@/app/layout/lodingBtn/loding";

export default function DeletePost({ postid, file }) {
    const [deleteBtn, setDeleteBtn] = useState({ delete: false, loding: false })

    const deletePost = async (id, file) => {
        setDeleteBtn({ delete: false, loding: true })
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
        finally {
            setDeleteBtn({ delete: false, loding: false })
        }


    }

    return (
        <td className="td_btn">
            {deleteBtn.delete ?
                <div className="delete_btn">
                    <button onClick={() => deletePost(postid, file)} className="btn_go_delete">حذف</button><br />
                    <button onClick={() => setDeleteBtn({ delete: false, loding: false })} className="btn_cansel">لغو</button>
                </div>
                : <button onClick={() =>  setDeleteBtn({ delete: true, loding: false })} className="delete_user">   {deleteBtn.loding ? <Loding /> : <RiDeleteBin6Line />}  </button>}



            <button className="delete_Comment">
                <RiChatDeleteLine />
            </button>
        </td>
    )
}