import classNames from "classnames";

function HeaderIcon({ Icon, active }) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-12 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={classNames({
          "h-5 sm:h-7 mx-auto text-center text-gray-500 group-hover:text-blue-500": true,
          "text-blue-500": active,
        })}
      />
    </div>
  );
}

export default HeaderIcon;
