import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

function Posts({ posts }) {
  const [realtimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <Post key={uuidv4()} id={post.id} {...post.data()} />
          ))
        : posts.map((post) => <Post key={uuidv4()} {...post} />)}
    </div>
  );
}

export default Posts;
