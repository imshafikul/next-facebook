import StoryCard from "./StoryCard";
import { v4 as uuidv4 } from "uuid";
import { stories } from "../../config";

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard key={uuidv4()} {...story} />
      ))}
    </div>
  );
}

export default Stories;
