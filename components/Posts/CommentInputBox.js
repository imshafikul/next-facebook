import { useRef } from "react";
import UserAvatar from "../Common/UserAvatar";
import { EmojiHappyIcon, CameraIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { db } from "../../firebase";
import firebase from "firebase";
import { users } from "../../config";

function CommentInputBox({ postId }) {
  const inputRef = useRef("");

  const postComment = async (e) => {
    e.preventDefault();
    const { value } = inputRef.current;
    if (!value) return;

    const user = users[Math.floor(Math.random() * 4) + 1];

    const comment = {
      message: value,
      timestamp: firebase.firestore.Timestamp.now(),
      user,
    };

    try {
      const postRef = db.collection("posts").doc(postId);

      postRef.update({
        comments: firebase.firestore.FieldValue.arrayUnion(comment),
      });
    } catch (error) {
      console.log("Failed comment posting");
    }
  };

  return (
    <div className="flex py-2 items-center">
      <UserAvatar size={30} />
      <form
        className="flex bg-gray-100 flex-grow rounded-full pl-3 py-1 ml-2"
        onSubmit={postComment}
      >
        <input
          type="text"
          placeholder="Write a comment..."
          className="bg-transparent outline-none flex-1"
          ref={inputRef}
        />
        <div className="hidden md:flex ml-2">
          <EmojiHappyIcon className="h-8 w-8 p-1 hover:bg-gray-200 rounded-full font-light cursor-pointer text-gray-500" />
          <CameraIcon className="h-8 w-8 p-1 hover:bg-gray-200 rounded-full font-light cursor-pointer text-gray-500" />
        </div>
      </form>
    </div>
  );
}

CommentInputBox.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentInputBox;
