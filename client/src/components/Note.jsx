import { Link } from "react-router";

export default function Note({ className, data }) {
  console.log(data);

  // const date = data.date.split("T")[0];
  // const time = data.time.split(".")[0];
  // why do the above lines only work when on the group page and not on a single page?

  return (
    <Link
      to={`/posts/${data.id}`}
      className={`flex flex-col size-full border border-[rgb(95,99,104)] rounded-sm overflow-hidden text-[rgb(232,234,237)] note justify-between ${data.colour} ${className}`}
    >
      <h3 className="p-2 note-top flex justify-between border-b border-[rgb(95,99,104)] text-[rgb(232,234,237)]">
        {data.title}
        <span>#{data.id}</span>
      </h3>
      <div className="note-body overflow-hidden">
        <p className="whitespace-pre-line">{data.body}</p>
      </div>
      <div className="note-bottom flex justify-between">
        <div className="date">{data.date}</div>
        <div className="time">{data.time}</div>
      </div>
    </Link>
  );
}
