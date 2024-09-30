"use client"

import { useEffect, useRef } from "react"

export default function FooterText({ footerText }) {
    const matlabRef = useRef()

    useEffect(() => {
        matlabRef.current.innerHTML = footerText
    }, [])

    return (<div ref={matlabRef} className="matlab"></div>)
}