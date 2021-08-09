import Link from "next/link";
import Image from "next/image";

function SidebarRow({ icon: Icon, title, url, src }) {
  return (
    <Link href={url}>
      <a className="flex items-center hover:bg-gray-200 rounded-lg	 p-2">
        {Icon && <Icon className="h-6 w-8 text-blue-500" />}
        {src && (
          <Image
            src={src}
            width={30}
            height={30}
            layout="fixed"
            className="rounded-full"
          />
        )}
        <p className="ml-3">{title}</p>
      </a>
    </Link>
  );
}

export default SidebarRow;
