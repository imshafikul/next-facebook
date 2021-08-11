import HeaderRight from "./Right";
import HeaderCenter from "./Center";
import HeaderLeft from "./Left";

function Header() {
  return (
    <div className="sticky top-0 bg-white shadow-md flex items-center p-2 lg:px-5 md:px-14">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
}

export default Header;
