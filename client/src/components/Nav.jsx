import { Link } from "react-router";

export default function Nav({ className }) {
  return (
    <nav className={className}>
      <Link to="/" className="p-3">
        home
      </Link>
      <Link to="/posts" className="p-3">
        posts
      </Link>
    </nav>
  );
}
