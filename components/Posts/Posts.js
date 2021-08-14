import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Post from "./Post";
import { v4 as uuidv4 } from "uuid";

function Posts() {
  const [posts] = useCollection(db.collection("posts"));

  console.log(posts);

  return (
    <div>
      {posts?.docs.map((post) => (
        <Post key={uuidv4()} id={post.id} {...post.data()} />
      ))}
    </div>
  );
}

export default Posts;
