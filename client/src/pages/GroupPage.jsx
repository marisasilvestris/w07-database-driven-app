import { useEffect, useState } from "react";
import Note from "../components/Note";

export default function GroupPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`http://localhost:9001/posts/`);
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
