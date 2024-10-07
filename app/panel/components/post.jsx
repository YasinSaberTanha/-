import DeletePost from "./deletePost";

export default function Post({ post }) {
  return (
    <tr>
      {<DeletePost postid={post.post_id} file={post.file} />}
      <td>{post.type}</td>
      <td>{post.date_create}</td>
      <td>{post.likes}</td>
      <td>{post.title}</td>
      <td>{post.post_id}</td>
    </tr>
  );
}
