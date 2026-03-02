import { useEffect, useState } from "react";
import Note from "../components/Note";
import SubmitNote from "../components/SubmitNote";

export default function GroupPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`http://localhost:9001/posts`);
      // const res = await fetch(`https://w07-database-driven-app.onrender.com/posts/`);
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
    setInterval(() => {
      fetchPosts();
    }, 3000);
  }, []);

  return (
    <>
      <SubmitNote />
      <div className="flex justify-center max-w-7xl mx-auto flex-wrap gap-5">
        {posts.length > 0
          ? posts.map((post) => {
              return <Note key={post.id} data={post} className={`w-75 h-75`} />;
            })
          : `No notes yet!`}
      </div>
    </>
  );
}
