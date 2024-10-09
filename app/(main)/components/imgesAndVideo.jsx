

import Image from "next/image";
import Link from "next/link";
import Like from "@/app/(main)/posts/components/like";

export default async function ImgesAndVideo({ setting }) {


    const dataPosts = async () => {

        const images = setting.image_id.split(",")
        const video = setting.video_id.split(",")

        const formData = new FormData()
        formData.append("image_id_1", images[0])
        formData.append("image_id_2", images[1])
        formData.append("image_id_3", images[2])

        formData.append("video_id_1", video[0])
        formData.append("video_id_2", video[1])
        formData.append("video_id_3", video[2])

        const data = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/getPostImage/`, {
            cache: "no-cache",
            method: "POST",
            body: formData
        }).then(res => res.json())

        return data

    }

    const renderImages = (data) => {
        const render = data.image?.map((image) => (
            <div key={image.post_id} className="box_image">
                <Image src={`/files/${image.file}`} width={300} height={300} alt="image" />
                <div className="icon_text">
                    <h2>{image.title}</h2>
                    <Like likes={image.likes} postId={image.post_id} />
                </div>
            </div>
        ))
        return render
    }

    const renderVideo = (data) => {

        const render = data.video?.map((video) => (
            <div key={video.post_id} className="box_video_player">
                <video className="video_player" controls>
                    <source src={`/files/${video.file}`} type="video/mp4" />
                </video>
                <div>
                    <div className="icon_text">
                        <h2>{video.title}</h2>
                        <Like likes={video.likes} postId={video.post_id} />
                    </div>
                </div>
            </div>
        ))
        return render
    }

    return (
        <section className="section">
            <div className="galore_image">
                <div className="galore_image_titel">
                    <Link href={"/posts"}>عکس</Link>
                </div>
                <div className="galore_image_upload" >

                    {renderImages(await dataPosts())}

                </div>
            </div>
            <div className="galore_video">
                <div className="galore_video_titel">
                    <Link href={"/posts"}>فیلم</Link>
                </div>
                <div className="galore_video_upload" >

                    {renderVideo(await dataPosts())}

                </div>
            </div>
        </section>
    )
}