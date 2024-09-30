"use client"

import { useRef, useEffect } from "react";


export default function Description({ description }) {

    const pRef = useRef(null)

    useEffect(() => {
        pRef.current.innerHTML = description
    }, [])



    return (

        <p ref={pRef}></p>
    )
}
