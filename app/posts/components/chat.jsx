"use client"
import CommentBox from "./commentBox"
import { useState, useEffect } from "react"
import { IoCloseSharp } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";


export default function Caht({ params }) {

    const [data, setData] = useState(null)
    const [replay, setReplay] = useState(null)
    const [comment, setComment] = useState("")
    const [lodeComment, setLodeComment] = useState("")

    useEffect(() => {

        const getComment = async () => {
            const formData = new FormData()
            formData.append("comment_id", params.commentId)
            try {
                const res = await fetch("http://localhost/payam/-/server/getComment/",
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
            await fetch("http://localhost/payam/-/server/postComment/", {
                method: "POST",
                body: formData
            })
            setLodeComment(<CommentBox comment={{ comment: comment, replay_comment: replay }} />)
            setReplay(null)
            setComment("")

        } catch (err) {
            console.log(err);
        }
    }

    const renderComments = data && data.map((comment, index) => (<CommentBox key={index} onClick={replayChat} comment={comment} />))


    return (
        <section>
            <div className="caht">
                <div className="show_caht">

                    {renderComments}
                    {lodeComment != "" && lodeComment}

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