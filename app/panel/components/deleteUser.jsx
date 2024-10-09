"use client";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { toast } from "react-toastify";
import Loding from "@/app/layout/lodingBtn/loding";

export default function DeleteUser({ userid }) {
  const [deleteBtn, setDeleteBtn] = useState({ delete: false, loding: false });

  const deleteUser = async (id) => {
    setDeleteBtn({ delete: false, loding: true });
    const formData = new FormData();
    formData.append("user_id", id);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NEXT}/api/deleteUser`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        toast.success("کاربر حذف شد", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("عملیات انجام نشد", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setDeleteBtn({ delete: false, loding: false });
    }
  };

  return (
    <td>
      {" "}
      {deleteBtn.delete ? (
        <div className="delete_btn">
          <button
            onClick={(e) => {
              deleteUser(userid);
              e.target.parentElement.parentElement.parentElement.remove();
            }}
            className="btn_go_delete"
          >
            حذف
          </button>
          <br />
          <button
            onClick={() => setDeleteBtn({ delete: false, loding: false })}
            className="btn_cansel"
          >
            لغو
          </button>
        </div>
      ) : (
        <button
          onClick={() => setDeleteBtn({ delete: true, loding: false })}
          className="delete_user"
        >
          {deleteBtn.loding ? <Loding /> : <RiDeleteBin6Line />}{" "}
        </button>
      )}
    </td>
  );
}
