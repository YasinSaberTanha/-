"use client";

import "./globals.css"

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function LaginOrLagout() {

  async function submitLagin(formData) {
    const res = await toast.promise(
      fetch(`${process.env.NEXT_PUBLIC_HOST_NEXT}/api/auth`, {
        method: "POST",
        body: JSON.stringify({
          gmail: formData.get("email_login"),
          password: formData.get("password_login"),
        }),
      }),
      {
        pending: "در حال انجام",
        success: "ورود",
        error: "عملیات انجام نشد",
      }
    );
    if (res.ok) {
      redirect("/");
    }
  }

  async function createAccount(formData) {
    const res = await toast.promise(
      fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/postUser/`, {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          gmail: formData.get("email"),
          password: formData.get("password"),
        }),
      }),
      {
        pending: "در حال انجام",
        success: "اکانت ساخته شد",
        error: "عملیات انجام نشد",
      }
    );
    if (res.ok) {
      redirect("/laginOrLagout");
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        theme="dark"
        pauseOnHover
      />
      <div className="box_lagin">
        <div className="wrapper">
          <div className="card-switch">
            <label className="switch">
              <input type="checkbox" className="toggle" />
              <span className="slider" />
              <span className="card-side" />
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">Log in</div>
                  <form className="flip-card__form" action={submitLagin}>
                    <input
                      className="flip-card__input"
                      name="email_login"
                      placeholder="Email"
                      type="email"
                    />
                    <input
                      className="flip-card__input"
                      name="password_login"
                      placeholder="Password"
                      type="password"
                    />
                    <button type="submit" className="flip-card__btn">
                      Let`s go!
                    </button>
                  </form>
                </div>
                <div className="flip-card__back">
                  <div className="title">Sign up</div>
                  <form className="flip-card__form" action={createAccount}>
                    <input
                      className="flip-card__input"
                      name="name"
                      placeholder="name"
                      type="name"
                    />
                    <input
                      className="flip-card__input"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                    <input
                      className="flip-card__input"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                    <button type="submit" className="flip-card__btn">
                      Confirm!
                    </button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
