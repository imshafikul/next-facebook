import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <h1>Header Component</h1>
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width={40}
          height={40}
        />
        <div className="flex ml-2 rounded-full">
          <SearchIcon className="h-6" />
          <input type="text" name="search" placeholder="Search Facebook" />
        </div>
      </div>
    </div>
  );
}

export default Header;
