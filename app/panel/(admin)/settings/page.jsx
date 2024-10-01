"use client"

import "./settings.css"
import Editor from "@/app/layout/ckEditor/editor";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loding from "@/app/layout/lodingBtn/loding";


export default function Settings() {





  const [editorLoaded, setEditorLoaded] = useState(false);
  const [description, setDescription] = useState("");
  const [footer, setfooter] = useState("");
  const [dataRes, setdataRes] = useState(null);
  const [data, setdata] = useState(null);
  const [loding, setLoding] = useState(false)

  useEffect(() => {
    async function getSettings() {
      await fetch("http://localhost/payam/-/server/getSettings/", { cache: "no-cache" })
        .then(res => res.json())
        .then(res => setdata(res))
    }


    getSettings()
    setEditorLoaded(true);
  }, []);




  async function submitForm(dataF) {

    const formData = new FormData()


    formData.append("favicon", dataF.get("favicon"))
    formData.append("image", dataF.get("image"))
    formData.append("logo", dataF.get("logo"))
    formData.append("title", dataF.get("title"))
    formData.append("image_id", dataF.get("image_id"))
    formData.append("video_id", dataF.get("video_id"))
    formData.append("description", description == "" ? data.description : description)
    formData.append("footer", footer == "" ? data.footer : footer)
    formData.append("keywords", dataF.get("keywords"))
    formData.append("title_web", dataF.get("title_web"))
    formData.append("description_web", dataF.get("description_web"))

    try {
      fetch("http://localhost:3000/api/postSettings", {
        cache: "no-cache",
        method: "POST",
        body: formData
      }).then(res => res.json())
        .then(res => setdataRes(res))

    } catch (err) {
      console.log(err);
    }
    finally {
      setLoding(false)
    }
  }

  function onchange(e) {
    setdata({ ...data, [e.target.name]: e.target.value })
  }



  return (
    <>
      <form action={submitForm}>
        <label htmlFor="file" className="custum_file_label">Favicon</label>
        <label className="custum-file-upload" htmlFor="file">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
              <g strokeWidth={0} id="SVGRepo_bgCarrier" />
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill=""
                  d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />{" "}
              </g>
            </svg>
          </div>
          <div className="text">
            <span>Favicon upload</span>
          </div>
          <input type="file" id="file" name="favicon" />
        </label>
        <Image src={`/setting/${data?.favicon}`} width={100}
          height={100}
          style={{ margin: "20px 40px 0 40px" }}
          alt="Picture of the author" />
        <hr />

        <label htmlFor="image" className="custum_file_label">image</label>
        <label className="custum-file-upload" htmlFor="image">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24">
              <g strokeWidth={0} id="SVGRepo_bgCarrier" />
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill=""
                  d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />{" "}
              </g>
            </svg>
          </div>
          <div className="text">
            <span>Favicon upload</span>
          </div>
          <input type="file" id="image" name="image" />
        </label>
        <Image src={`/setting/${data?.image}`} width={100}
          height={100}
          style={{ margin: "20px 40px 0 40px" }}
          alt="Picture of the author" />
        <hr />

        <div className="logo">
          <label htmlFor="logo_home" className="label_logo" >Logo</label>
          <input type="text" id="logo_home" name="logo" onChange={onchange} value={data?.logo} />
        </div>
        <hr />

        <div className="title">
          <label htmlFor="title_home" className="label_title" >Title</label>
          <input type="text" id="title_home" name="title" onChange={onchange} value={data?.title} />
        </div>
        <hr />

        <div className="image_id">
          <label htmlFor="image_id" className="label_image">Image_id</label>
          <br />
          <input type="text" id="image_id" name="image_id" onChange={onchange} value={data?.image_id} />

        </div>
        <hr />

        <div className="video_id">
          <label htmlFor="video_id" className="label_video">Video_id</label>
          <br />
          <input type="text" id="video_id" name="video_id" onChange={onchange} value={data?.video_id} />
        </div>
        <hr />

        <label htmlFor="###" className="label_title">Description</label>
        <Editor
          name="description"
          onChange={(data) => {
            setDescription(data);
          }}
          editorLoaded={editorLoaded}
        />
        <hr />


        <label htmlFor="###" className="label_title">Footer</label>
        <Editor
          name="footer"
          onChange={(data) => {
            setfooter(data);
          }}
          editorLoaded={editorLoaded}
        />
        <hr />

        <div className="keywords">
          <label htmlFor="keywords" className="label_keywords" >Keywords</label>
          <input type="text" id="keywords" name="keywords" onChange={onchange} value={data?.keywords} />
        </div>
        <hr />

        <div className="title_web">
          <label htmlFor="title_web" className="label_title_web" >Title_web</label>
          <input type="text" id="title_web" name="title_web" onChange={onchange} value={data?.title_web} />
        </div>
        <hr />

        <div className="description_web">
          <label htmlFor="description_web" className="label_description_web" >Description_Web</label>
          <br />
          <textarea id="description_web" name="description_web" onChange={onchange} value={data?.description_web}></textarea>
        </div>
        <hr />
        <button className="btn_submit" onClick={() => setLoding(true)}>{loding ? <Loding /> : "ثبت"}</button>
      </form>
    </>
  );
}