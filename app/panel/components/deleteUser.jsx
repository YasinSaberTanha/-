"use client"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
export default function DeleteUser({ userid }) {

    const [deleteBtn, setDeleteBtn] = useState({ delete: false, loding: false })


    const deleteUser = async (id) => {
        setDeleteBtn({ delete: false, loding: true })
        const formData = new FormData()

        formData.append("user_id", id)

        try {
            const res = await fetch("http://localhost:3000/api/deleteUser", {
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
        <td>            {deleteBtn.delete ?
            <div className="delete_btn">
                <button onClick={() => deleteUser(userid)} className="btn_go_delete">حذف</button><br />
                <button onClick={() => setDeleteBtn({ delete: false, loding: false })} className="btn_cansel">لغو</button>
            </div>
            : <button onClick={() =>  setDeleteBtn({ delete: true, loding: false })} className="delete_user">   {deleteBtn.loding ? <Loding /> : <RiDeleteBin6Line />}  </button>}
            </td>
    )
}