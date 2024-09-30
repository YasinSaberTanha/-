"use client"

import { redirect } from "next/dist/server/api-utils"
import "../globals.css"
import { useState } from "react"
export default function About() {

  const [loding, setLoding] = useState(false)

  const sobmitForm = async (form) => {
  
    const formData = new FormData()

    formData.append("file", form.get("file"))
    formData.append("title", form.get("title"))
    formData.append("description", form.get("description"))
    formData.append("type", form.get("type"))
    formData.append("mode", form.get("mode"))

    try {
      setLoding(true)
      const res = await fetch("http://localhost:3000/api/postPost", {
        method: "POST",
        body: formData
      })

      if (res.ok) {
        setLoding(false)
      }

    } catch (err) {
      console.log(err);
    }



  }


  return (
    <form action={sobmitForm}>
      <label htmlFor="file" className="custum_file_label">File</label>
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
          <span>File upload</span>
        </div>
        <input type="file" id="file" name="file" />
      </label>
      <hr />

      <div className="title">
        <label htmlFor="title" className="label_title" >Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <hr />

      <div className="description">
        <label htmlFor="description" className="label_description" >Description</label>
        <input type="text" id="description" name="description" />
      </div>
      <hr />

      <div className="description">
        <label htmlFor="description" className="label_description" >Description</label>
        <br />
        <select defaultValue="" name="type">
          <option value="">انتخاب کنید</option>
          <option value="video">فیلم</option>
          <option value="image">عکس</option>
        </select>
        <br />
        <select defaultValue="" name="mode">
          <option value="">انتخاب کنید</option>
          <option value="horizontal">افقی</option>
          <option value="vertical">عمودی</option>
        </select>
      </div>
      <hr />
      <button className="btn_submit"> {!loding ? "ثبت" :
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}</button>
    </form>
  );
}