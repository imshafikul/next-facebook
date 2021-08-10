import Image from "next/image";

function StoryCard({ name, src, profile, avatar }) {
  return (
    <div className="relative h-56 w-32">
      <Image src={src} layout="fill" className="rounded-3xl" />
      <p>{name}</p>
    </div>
  );
}

export default StoryCard;
