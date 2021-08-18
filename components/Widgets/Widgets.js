import {
  SearchIcon,
  DotsCircleHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

import { contacts } from "../../config";
import Contact from "./Contact";
import { v4 as v4uuid } from "uuid";

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60  pt-5">
      <div className="flex justify-between text-gray-500 mb-5 items-center">
        <div className="text-xl">Contact</div>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-8 w-8 hover:bg-gray-200 rounded-full p-1.5 cursor-pointer" />
          <SearchIcon className="h-8 w-8 hover:bg-gray-200 rounded-full p-1.5 cursor-pointer" />
          <DotsCircleHorizontalIcon className="h-8 w-8 hover:bg-gray-200 rounded-full p-1.5 cursor-pointer" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={v4uuid()} {...contact} />
      ))}
    </div>
  );
}

export default Widgets;
