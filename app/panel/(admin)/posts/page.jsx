import "./globals.css"
import Link from "next/link";
import Post from "../../components/post";

export default async function Posts() {


  const getPosts = async () => {
    try {
      const data = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/server/getPosts/`, { cache: "no-cache" })
      const posts = await data.json()

      const renderPosts = posts.map((post) => (<Post post={post} />))
      return renderPosts
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <div className="create_div">
        <Link href={"posts/createPost"} className="create">ساخت</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Delete Comment or Post</th>
            <th>Type</th>
            <th>Date</th>
            <th>Like</th>
            <th>Title</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {getPosts()}
        </tbody>
      </table>
    </>
  );
}