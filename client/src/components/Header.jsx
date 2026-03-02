import { Link } from "react-router";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header className="w-full border-b border-b-(--border)">
        <div className="gdfg">Notes</div>
        <Nav className="flex flex-row gap-3" />
      </header>
    </>
  );
}
