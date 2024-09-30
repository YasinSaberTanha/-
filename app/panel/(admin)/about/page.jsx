"use client"
import "./globals.css"
import Editor from "@/app/layout/ckEditor/editor";
import React, { useState, useEffect } from "react";

export default function About() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [descriptionsAbout, setDescriptionsAbout] = useState("");

  const getAbout = async (form) => {
    const formData = new FormData()
    formData.append("descriptions_about", descriptionsAbout)

    try {
      const res = await fetch("http://localhost:3000/api/postAbout", {
        cache: "no-cache",
        method: "POST",
        body: formData
      })
      const data = await res.json()
    } catch (err) {
      console.log(err);
    }
  }



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
  )
}