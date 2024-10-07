"use client";

import { RiDeleteBin6Line } from "react-icons/ri";
import { RiChatDeleteLine } from "react-icons/ri";
import { useState } from "react";
import Loding from "@/app/layout/lodingBtn/loding";
import { toast } from "react-toastify";

export default function DeletePost({ postid, file }) {
  const [deleteBtnUser, setDeleteBtnUser] = useState({
    delete: false,
    loding: false,
  });
  const [deleteBtnComments, setDeleteBtnComments] = useState({
    delete: false,
    loding: false,
  });

  const deletePost = async (id, file) => {
    setDeleteBtnUser({ delete: false, loding: true });
    const formData = new FormData();

    formData.append("file", file);
    formData.append("post_id", id);

    try {
      const res = await fetch("http://localhost:3000/api/deletePost", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("پست حذف شد", {
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
      setDeleteBtnUser({ delete: false, loding: false });
    }
  };

  const deleteCommments = async (id) => {
    setDeleteBtnComments({ delete: false, loding: true });
    const formData = new FormData();

    formData.append("post_id", id);

    try {
      const res = await fetch("http://localhost:3000/api/deleteComments", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("کامنت ها پاک شدند", {
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
      setDeleteBtnComments({ delete: false, loding: false });
    }
  };

  return (
    <td className="td_btn">
      {deleteBtnUser.delete ? (
        <div className="delete_btn">
          <button
            onClick={(e) => {
              deletePost(postid, file);
              e.target.parentElement.parentElement.parentElement.remove();
            }}
            className="btn_go_delete"
          >
            حذف
          </button>
          <br />
          <button
            onClick={() => setDeleteBtnUser({ delete: false, loding: false })}
            className="btn_cansel"
          >
            لغو
          </button>
        </div>
      ) : (
        <button
          onClick={() => setDeleteBtnUser({ delete: true, loding: false })}
          className="delete_user"
        >
          {" "}
          {deleteBtnUser.loding ? <Loding /> : <RiDeleteBin6Line />}{" "}
        </button>
      )}

      {/* ///////////////////////////comments/////////////////////////////// */}

      {deleteBtnComments.delete ? (
        <div className="delete_btn">
          <button
            onClick={() => deleteCommments(postid, file)}
            className="btn_go_delete"
          >
            حذف
          </button>
          <br />
          <button
            onClick={() =>
              setDeleteBtnComments({ delete: false, loding: false })
            }
            className="btn_cansel"
          >
            لغو
          </button>
        </div>
      ) : (
        <button
          onClick={() => setDeleteBtnComments({ delete: true, loding: false })}
          className="delete_Comment"
        >
          {" "}
          {deleteBtnComments.loding ? <Loding /> : <RiChatDeleteLine />}{" "}
        </button>
      )}
    </td>
  );
}
