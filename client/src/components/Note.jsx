import { Link } from "react-router";

export default function Note({ className, data }) {
  return (
    <div
      className={`border-amber-400 border-3 rounded-lg bg-amber-200 text-black ${className}`}
    >
      <div className="topBar flex justify-between px-4">
        <h3>{data.title}</h3>
        <Link to={`/posts/${data.id}`}>test</Link>
      </div>
      <p>{data.body}</p>
      <span className="datetime">
        {data.date} - {data.time}
      </span>
      <ul>
        <li>test1</li>
      </ul>
    </div>
  );
}
