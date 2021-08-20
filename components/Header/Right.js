import Image from "next/image";
import { useSession, signOut } from "next-auth/client";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";
import UserAvatar from "../Common/UserAvatar";

function HeaderRight() {
  const [session] = useSession();

  return (
    <div className="hidden md:flex items-center justify-end sm:space-x-2">
      <div
        className="flex items-center p-1 rounded-full hover:bg-gray-100 cursor-pointer"
        onClick={signOut}
      >
        <UserAvatar />
        <p className="whitespace-nowrap font-semibold  pl-1 pr-1">
          {session && session.user.name}
        </p>
      </div>
      <BellIcon className="icon" />
      <ChatIcon className="icon" />
      <ChevronDownIcon className="icon" />
      <ViewGridAddIcon className="icon" />
    </div>
  );
}

export default HeaderRight;
