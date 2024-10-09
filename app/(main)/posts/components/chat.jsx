"use client"
import CommentBox from "./commentBox"
import { useState, useEffect, useMemo } from "react"
import { IoCloseSharp } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";


export default function Caht({ params }) {

    const [data, setData] = useState(null)
    const [replay, setReplay] = useState(null)
    const [comment, setComment] = useState("")
    let [lodeComment, setLodeComment] = useState("")


    let add;

    useEffect(() => {
        const getComment = async () => {
            const formData = new FormData()
            formData.append("comment_id", params.commentId)
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/getComment/`,
                    {
                        method: "POST",
                        body: formData
                    }
                ).then(res => res.json()).then(res => setData(res))
            } catch (err) {
                console.log("ERR ===============> " + err);
            }
        }
        getComment()
    }, [])


    const replayChat = (e) => {
        if (e.target.tagName == "B") {
            setReplay(e.target.innerHTML)
        }
    }



    const sendComment = async () => {
        const formData = new FormData()

        if (comment == "") {
            return false
        }

        replay && formData.append("replay", replay)
        formData.append("comment", comment)
        formData.append("post_id", params.commentId)

        try {
            await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/postComment/`, {
                method: "POST",
                body: formData
            })

            setLodeComment(!replay ?
                `<div class="div_caht">
                    <div class="div_caht_viwe">
                        <p>
                            <b>${comment}</b>
                        </p>
                    </div>
                </div>`
                + lodeComment
                :
                `<div class="div_caht">
                    <div class="div_caht_viwe">
                            <div  class= "replay" >
                                <span>${replay}</span>
                            </div > 
                        <p>
                            <b>${comment}</b>
                        </p>
                    </div>
                </div>`
                + lodeComment
            )

            setReplay(null)
            setComment("")
        } catch (err) {
            console.log(err);
        }
    }


    const renderCommentsmemo = useMemo(() =>
        data && data.map((comment, index) => (<CommentBox key={index} onClick={replayChat} comment={comment} />))
        , [data])



    return (
        <section>
            <div className="caht" >
                <div className="show_caht">

                    {lodeComment ? <div onClick={replayChat} dangerouslySetInnerHTML={{ __html: lodeComment }}></div> : null}
                    {renderCommentsmemo}

                    <br />
                    <br />
                </div>

                {replay && <div className="send_caht_replay">
                    <IoCloseSharp onClick={() => setReplay(null)} className="replay_close" /><span>{replay}</span>
                </div>}

                <form className="send_caht" action={sendComment}>
                    <input type="text" onChange={(e) => setComment(e.target.value)} value={comment} />
                    <button><IoSendSharp className="icon_send" /></button>
                </form>

            </div>
        </section>
    );

}