import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";

function HeaderRight() {
  return (
    <div className="flex items-center justify-end sm:space-x-2">
      <p className="whitespace-nowrap font-semibold pr-3">Shafikul Islam</p>
      <BellIcon className="icon" />
      <ChatIcon className="icon" />
      <ChevronDownIcon className="icon" />
      <ViewGridAddIcon className="icon" />
    </div>
  );
}

export default HeaderRight;
