const { default: Stories } = require("../Stories");

function Feed() {
  return (
    <div className="flex-grow h-screen pt-5 pb-40">
      {/* Stories */}
      <Stories />
      {/* Input Box  */}
      {/* Input Post  */}
    </div>
  );
}

export default Feed;
