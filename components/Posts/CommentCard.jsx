import UserAvatar from "../Common/UserAvatar";

function CommentCard({ message, timestamp, user }) {
  const { avatar, name } = user;
  return (
    <div className="flex pb-3 w-3/5">
      <UserAvatar src={avatar} />
      <div className="ml-2 flex-1">
        <div className="bg-gray-100 rounded-2xl p-3">
          <p className="text-sm">{name}</p>
          <p className="text-xs text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
