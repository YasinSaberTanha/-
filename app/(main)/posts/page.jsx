import "./globals.css"
import PostImage from "./components/postImage";
import PostVideo from "./components/postVideo";
import Header from "@/app/layout/header/header";


export default async function Posts() {
  const getPosts = async () => {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/getPosts/`, { cache: "no-store" })
      const posts = await data.json()

      const renderPosts = posts.map((post) => (post.type == "image" ? <PostImage post={post} /> : <PostVideo post={post} />))
      return renderPosts
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      <section>
        {getPosts()}
      </section>
    </>
  );
}