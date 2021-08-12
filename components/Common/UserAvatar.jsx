import Image from "next/image";
import { useSession } from "next-auth/client";
import PropTypes from "prop-types";

function UserAvatar({ size, src }) {
  const [session] = useSession();

  if (!session && !src) return <></>;

  return (
    <>
      {session && (
        <Image
          src={src || session.user.image}
          className="rounded-full"
          width={size}
          height={size}
          layout="fixed"
        />
      )}
    </>
  );
}

UserAvatar.propTypes = {
  size: PropTypes.number.isRequired,
  src: PropTypes.string,
};

UserAvatar.defaultProps = {
  size: 30,
};

export default UserAvatar;
