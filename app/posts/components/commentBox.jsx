

export default function CommentBox({ comment, onClick }) {

    
    return (
        <div className="div_caht" >
            <div className="div_caht_viwe" onClick={onClick}>
                {
                    comment.replay_comment && <div className="replay">
                        <span>{comment.replay_comment}</span>
                    </div>
                }
                <p>
                    <b>{comment.comment}</b>
                </p>
            </div>
        </div>
    )
}