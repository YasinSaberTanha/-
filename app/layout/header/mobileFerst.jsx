"use client"

import { useState, useEffect } from "react"
import Item from "./item"

export default function MobileFerst({ cookie }) {

    const [hamburger, setHamburger] = useState(false)

    useEffect(() => {
        setHamburger(window.innerWidth > 992 ? true : false)
    }, [])



    return (
        <>
            <label className="hamburger">
                <input type="checkbox" onChange={() => setHamburger(e => !e)} checked={hamburger} />
                <svg viewBox="0 0 32 32">
                    <path
                        className="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    />
                    <path className="line" d="M7 16 27 16" />
                </svg>
            </label>

            {hamburger ? <> <div className="box_shadow_mobile" onClick={() => setHamburger(false)}></div><Item cookie={cookie} /></> : null}


        </>
    )
}