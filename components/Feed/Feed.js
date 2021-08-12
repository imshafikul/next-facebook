const { default: InputBox } = require("../InputBox/InputBox");
const { default: Stories } = require("../Stories");

function Feed() {
  return (
    <div className="flex-grow h-screen pt-5 pb-40 mr-4 xl:mr-40">
      <div className="mx-auto mx-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        {/* Input Post  */}
      </div>
    </div>
  );
}

export default Feed;
