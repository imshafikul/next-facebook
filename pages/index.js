import Head from "next/head";
import Header from "../components/Header";
import { getSession } from "next-auth/client";
import Login from "../components/Auth/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const postsRef = await db
    .collection("posts")
    .orderBy("timestamp", "desc")
    .get();

  const posts = await postsRef.docs.map((item) => ({
    id: item.id,
    ...item.data(),
    comments: [],
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts,
    },
  };
}
