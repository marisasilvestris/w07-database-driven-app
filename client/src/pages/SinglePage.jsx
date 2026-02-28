import { useEffect, useState } from "react";
import Note from "../components/Note";
import { useParams } from "react-router";

export default function SinglePage() {
  const { id } = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`http://localhost:9001/posts/${id}`);
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
