import Image from "next/image";

function StoryCard({ name, src, avatar }) {
  return (
    <div className="relative h-10 w-10 md:h-20 md:w-20 lg:h-56 lg:w-32 p-3 cursor-pointer transition duration-200 transform ease-in hover:scale-105 group">
      <Image
        src={src}
        layout="fill"
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl group-hover:brightness-100 transition duration-200"
        alt={name}
      />
      <Image
        src={avatar}
        width={40}
        height={40}
        className="rounded-full absolute top-20 z-50  opacity-0 lg:opacity-100"
        layout="fixed"
        objectFit="cover"
        alt={name}
      />
      <p className="absolute bottom-4 w-5/6 text-white tex-sm font-bold truncate opacity-0 lg:opacity-100">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
