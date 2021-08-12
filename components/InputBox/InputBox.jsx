const { default: UserAvatar } = require("../Common/UserAvatar");

function InputBox() {
  return (
    <div className="bg-white shadow mt-8 w-[800px] mx-auto px-4 py-3 rounded-lg">
      <div className="flex">
        <UserAvatar />
      </div>
    </div>
  );
}

export default InputBox;
