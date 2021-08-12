import UserAvatar from "../Common/UserAvatar";
import { VideoCameraIcon, PhotographIcon } from "@heroicons/react/solid";

import { EmojiHappyIcon } from "@heroicons/react/outline";

function InputBox() {
  const postStatus = (e) => e.preventDefault();

  return (
    <div className="bg-white shadow mt-8 justify-center mx-auto px-4 py-3 rounded-lg">
      <div className="flex items-center">
        <UserAvatar size={40} />
        <form
          className="flex flex-grow p-2 ml-2 bg-gray-100 rounded-full"
          onSubmit={postStatus}
        >
          <input
            className="flex-grow bg-transparent outline-none px-2"
            placeholder="What's on your mind, Shafikul?"
          />
        </form>
      </div>

      <hr className="my-3" />

      <div className="flex justify-center ">
        <button className="flex items-center px-6 py-1 hover:bg-gray-100 rounded-md">
          <VideoCameraIcon className="w-8 text-red-500" />
          <span className="text-gray-500 font-medium ml-2">Live Video</span>
        </button>

        <button className="flex items-center px-6 py-1 hover:bg-gray-100 rounded-md">
          <PhotographIcon className="w-8 text-green-500" />
          <span className="text-gray-500 font-medium ml-2">Photo/Video</span>
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
