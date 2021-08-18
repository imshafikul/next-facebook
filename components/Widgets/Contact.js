const { default: UserAvatar } = require("../Common/UserAvatar");

function Contact({ src, name }) {
  return (
    <div className="relative flex items-center p-2 hover:bg-gray-200 cursor-pointer rounded-md">
      <UserAvatar src={src} size={36} />
      <p className="ml-2">{name}</p>
      <div className="absolute left-8 bottom-2 bg-green-400 h-2 w-2 rounded-full"></div>
    </div>
  );
}

export default Contact;
