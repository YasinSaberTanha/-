"use client"
import { RiDeleteBin6Line } from "react-icons/ri";
export default function DeleteUser({ userid }) {
    const deleteUser = async (id) => {

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

    }

    return (
        <td><button onClick={() => deleteUser(userid)} className="delete_user"><RiDeleteBin6Line /></button></td>
    )
}