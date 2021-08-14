const { default: UserAvatar } = require("../Common/UserAvatar");
import {
  EmojiHappyIcon,
  EmojiSadIcon,
  ThumbUpIcon,
  ChatIcon,
  ShareIcon,
  CameraIcon,
} from "@heroicons/react/outline";
import moment from "moment";
import Image from "next/image";

function Post({ name, image, message, postImage, timestamp }) {
  return (
    <div className="bg-white shadow mt-4 justify-center mx-auto rounded-lg">
      <div className="px-4 py-3 ">
        <div className="flex pb-3">
          <UserAvatar src={image} size={40} />
          <div className="ml-2 flex flex-col justify-center">
            <p className="font-medium m-0">{name}</p>
            <span className="text-gray-400 text-xs">
              {moment(new Date(timestamp?.toDate().toLocaleString())).fromNow()}
            </span>
          </div>
        </div>
        <p className="">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-h2 lg:h-96 bg-white mb-3 border-2">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      <div className="px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex">
            <div className="flex">
              <EmojiHappyIcon className="h-6 text-yellow-500" />
              <EmojiSadIcon className="h-6 -ml-2 text-yellow-500" />
            </div>
            <span className="text-gray-500 text-md font-light ml-1">20</span>
          </div>
          <div className="text-gray-500 text-md font-light">20 Share</div>
        </div>
        <hr className="my-1" />

        <div className="flex justify-between items-center">
          <div className="flex justify-center flex-1 cursor-pointer hover:bg-gray-100 py-2 rounded-md text-gray-600 text-md font-md">
            <ThumbUpIcon className="h-6 mr-1" /> Like
          </div>
          <div className="flex justify-center flex-1 cursor-pointer hover:bg-gray-100 py-2 rounded-md text-gray-600 text-md font-md">
            <ChatIcon className="h-6 mr-1" /> Comment
          </div>
          <div className="flex justify-center flex-1 cursor-pointer hover:bg-gray-100 py-2 rounded-md text-gray-600 text-md font-md">
            <ShareIcon className="h-6 mr-1" /> Comment
          </div>
        </div>
        <hr className="my-1" />

        <div className="flex py-2 items-center">
          <UserAvatar size={30} />
          <div className="flex bg-gray-100 flex-grow rounded-full pl-3 py-1 ml-2">
            <input
              type="text"
              placeholder="Write a comment..."
              className="bg-transparent outline-none flex-1"
            />
            <div className="flex ml-2">
              <EmojiHappyIcon className="h-8 w-8 p-1 hover:bg-gray-200 rounded-full font-light cursor-pointer text-gray-500" />
              <CameraIcon className="h-8 w-8 p-1 hover:bg-gray-200 rounded-full font-light cursor-pointer text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
