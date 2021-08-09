import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

function HeaderLeft() {
  return (
    <div className="flex items-center">
      <Image
        src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
        width={40}
        height={40}
      />
      <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-6 text-gray-600" />
        <input
          type="text"
          name="search"
          placeholder="Search Facebook"
          className="flex items-center bg-transparent placeholder-gray-500 outline-none ml-2 flex-shrink"
        />
      </div>
    </div>
  );
}

export default HeaderLeft;
