import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        width={200}
        height={200}
        objectFit="contain"
        alt="Github Icon"
      />
      <h1
        className="px-5 py-2 text-center text-white bg-gray-900 rounded-full cursor-pointer"
        onClick={signIn}
      >
        Login with Github
      </h1>
    </div>
  );
}

export default Login;
