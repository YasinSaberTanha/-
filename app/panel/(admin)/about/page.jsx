"use client";
import "./globals.css";
import Editor from "@/app/layout/ckEditor/editor";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
export default function About() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [descriptionsAbout, setDescriptionsAbout] = useState("");

  const getAbout = async (form) => {
    const formData = new FormData();
    formData.append("descriptions_about", descriptionsAbout);

    try {
      const res = await fetch("http://localhost:3000/api/postAbout", {
        cache: "no-cache",
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        toast.success("اطلاعات ذخیر شد", {
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
    }
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <form action={getAbout}>
      <Editor
        name="descriptions"
        onChange={(data) => {
          setDescriptionsAbout(data);
        }}
        editorLoaded={editorLoaded}
      />
      <button className="btn_submit">ثبت</button>
    </form>
  );
}
