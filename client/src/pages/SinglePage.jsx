import { useEffect, useState } from "react";
import Note from "../components/Note";
import { useParams } from "react-router";

export default function SinglePage() {
  const { id } = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(
        `https://w07-database-driven-app.onrender.com/posts/${id}`,
      );
      const data = await res.json();
      setPost(data[0]);
    }

    fetchPost();
  }, [id]);

  return (
    <>
      <Note data={post} />
    </>
  );
}
