import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";

function Fout0Four() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Header />
      <main className="flex flex-col justify-center items-center text-center h-full">
        <Image
          src="https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6SrY.svg?_nc_eui2=AeHtC9rdFMo_BcRTZAhpnO4caxgLudg0YLtrGAu52DRguyhx92UHaB0xNclSknP0DVAWfBFlU_FkirIzR7zD4GB-"
          width={110}
          height={110}
          layout="fixed"
        />
        <h1 className="font-bold text-gray-600 text-lg mt-5">
          This Page Isn't Available
        </h1>
        <p className=" text-gray-600">
          The link may be broken, or the page may have been <br /> removed.
          Check to see if the link you're trying to open is <br /> correct.
        </p>
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-600 text-white py-2 mt-3 px-10 rounded-lg font-medium transition">
            Go ot News feed
          </a>
        </Link>
      </main>
    </div>
  );
}

export default Fout0Four;
