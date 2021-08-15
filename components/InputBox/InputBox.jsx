import { useRef, useState } from "react";
import UserAvatar from "../Common/UserAvatar";
import { VideoCameraIcon, PhotographIcon, XIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { db, storage } from "../../firebase";
import { useSession } from "next-auth/client";
import firebase from "firebase";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [fileToPost, setFileToPost] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const postStatus = (e) => {
    e.preventDefault();
    const { value } = inputRef.current;
    if (!value) return;
    const { name, email, image } = session.user || {};

    db.collection("posts")
      .add({
        message: value,
        name,
        email,
        image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        comments: [],
      })
      .then((doc) => {
        if (fileToPost) {
          const storageRef = storage.ref(`posts/${doc.id}`);
          const upload = storageRef.putString(fileToPost, "data_url");

          upload.on(
            "state_change",
            (snapshot) => {
              var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

              setUploading(true);
              setProgress(Math.round(progress));
            },
            () => {
              console.log("File uploading failed, please try again! ");
            },
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });

              removeFile();
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.onload = (event) => setFileToPost(event.target.result);
  };

  const removeFile = () => setFileToPost(null);

  const sessionUserName = () => {
    if (!session) return "";

    const userName = session.user.name.split(" ")[0];
    return `, ${userName}`;
  };

  return (
    <div className="bg-white shadow mt-8 justify-center mx-auto px-4 py-3 rounded-lg">
      <div className="flex items-center">
        <UserAvatar size={40} />
        <form
          className="flex flex-grow p-2 ml-2 bg-gray-100 rounded-full"
          onSubmit={postStatus}
        >
          <input
            className="flex-grow bg-transparent outline-none px-2 transition duration-400 width"
            placeholder={`What's on your mind${sessionUserName()} ?`}
            ref={inputRef}
          />
        </form>
        {fileToPost && (
          <div
            className="relative flex items-center justify-center flex-col ml-2 cursor-pointer h-10 w-10 rounded-full transition transform duration-200 hover:scale-105 filter hover:brightness-110"
            onClick={removeFile}
          >
            <img
              src={fileToPost}
              className="object-cover rounded-full h-10 w-10"
            />
            <XIcon className="absolute right-0 top-0 text-xs text-red-700 h-5" />

            {uploading && (
              <span className="text-xs text-blue-700">{progress}%</span>
            )}
          </div>
        )}
      </div>

      <hr className="my-3" />

      <div className="flex justify-center ">
        <button className="flex items-center px-6 py-1 hover:bg-gray-100 rounded-md">
          <VideoCameraIcon className="w-8 text-red-500" />
          <span className="text-gray-500 font-medium ml-2">Live Video</span>
        </button>

        <button
          onClick={() => fileInputRef.current.click()}
          className="flex items-center px-6 py-1 hover:bg-gray-100 rounded-md"
        >
          <PhotographIcon className="w-8 text-green-500" />
          <span className="text-gray-500 font-medium ml-2">Photo/Video</span>
          <input
            className="hidden"
            type="file"
            ref={fileInputRef}
            // accept="image/*"
            onChange={handleFileChange}
          />
        </button>
        <button className="flex items-center px-6 py-1 hover:bg-gray-100 rounded-md">
          <EmojiHappyIcon className="w-8 text-yellow-500" />
          <span className="text-gray-400 font-medium ml-2">
            Feeling/Activity
          </span>
        </button>
      </div>
    </div>
  );
}

export default InputBox;
