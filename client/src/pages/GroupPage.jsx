import { useEffect, useState } from "react";
import Note from "../components/Note";

export default function GroupPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        `https://w07-database-driven-app.onrender.com/posts/`,
      );
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <div>test</div>
      {posts.length > 0
        ? posts.map((post) => {
            return (
              <div>
                <Note data={post} />
              </div>
            );
          })
        : null}
    </>
  );
}
