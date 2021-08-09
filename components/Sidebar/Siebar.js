import SidebarRow from "./SidebarRow";
import {
  UsersIcon,
  DesktopComputerIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import { UserGroupIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/client";

function Siebar() {
  const sidebar_items = [
    {
      title: "Friends",
      url: "/friends",
      icon: UsersIcon,
    },
    {
      title: "Group",
      url: "/group",
      icon: UserGroupIcon,
    },
    {
      title: "Marketplace",
      url: "/marketplace",
      icon: ShoppingBagIcon,
    },
    {
      title: "Watch",
      url: "/watch",
      icon: DesktopComputerIcon,
    },
    {
      title: "Events",
      url: "/events",
      icon: CalendarIcon,
    },
    {
      title: "Memories",
      url: "/memories",
      icon: ClockIcon,
    },
  ];

  const [session, loading] = useSession();

  return (
    <div className="p-2 mt-2 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow
        src={session && session.user.image}
        title={session && session.user.name}
        url="/"
      />
      {sidebar_items.map((item) => (
        <SidebarRow {...item} key={uuidv4()} />
      ))}
    </div>
  );
}

export default Siebar;
