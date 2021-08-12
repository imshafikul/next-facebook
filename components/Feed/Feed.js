const { default: InputBox } = require("../InputBox/InputBox");
const { default: Stories } = require("../Stories");

function Feed() {
  return (
    <div className="flex-grow h-screen pt-5 pb-40">
      <Stories />
      {/* Input Box  */}
      <InputBox />
      {/* Input Post  */}
    </div>
  );
}

export default Feed;
