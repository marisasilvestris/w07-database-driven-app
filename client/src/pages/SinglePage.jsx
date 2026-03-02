import { useEffect, useState } from "react";
import Note from "../components/Note";
import { useParams } from "react-router";

export default function SinglePage() {
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      // const res = await fetch(`http://localhost:9001/posts/${id}`);
      const res = await fetch(
        `https://w07-database-driven-app.onrender.com/posts/${id}`,
      );
      console.log(res);

      // const res = await fetch(`https://w07-database-driven-app.onrender.com/posts/${id}`);
      const data = await res.json();
      setPost(data[0]);
    }

    fetchPost();
  }, [id]);

  return (
    <>
      <div className="place-items-center">
        {post ? (
          <Note data={post} className={`h-128 w-128 max-w-screen`} />
        ) : (
          `No note found!`
        )}
      </div>
    </>
  );
}
