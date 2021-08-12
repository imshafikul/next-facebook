import Image from "next/image";
import { useSession } from "next-auth/client";
import PropTypes from "prop-types";

function UserAvatar({ size }) {
  const [session] = useSession();

  return (
    <>
      {session && (
        <Image
          src={session.user.image}
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
};

UserAvatar.defaultProps = {
  size: 30,
};

export default UserAvatar;
