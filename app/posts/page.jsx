import PostImage from "./components/postImage";
import PostVideo from "./components/postVideo";


export default async function Posts() {

  const getPosts = async () => {
    try {
      const data = await fetch("http://localhost/payam/-/server/getPosts/", { cache: "no-store" })
      const posts = await data.json()

      const renderPosts = posts.map((post) => (post.type == "image" ? <PostImage post={post} /> : <PostVideo post={post} />))
      return renderPosts
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <section>
      {getPosts()}
    </section>
  );
}