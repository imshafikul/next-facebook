import Link from "next/link";
import UserAvatar from "../Common/UserAvatar";

function SidebarRow({ icon: Icon, title, url, src }) {
  return (
    <Link href={url}>
      <a className="flex items-center hover:bg-gray-200 rounded-lg	 p-2">
        {Icon && <Icon className="h-6 w-8 text-blue-500" />}
        {src && <UserAvatar src={src} />}
        <p className="ml-3">{title}</p>
      </a>
    </Link>
  );
}

export default SidebarRow;
