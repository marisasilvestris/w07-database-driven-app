import { Link } from "react-router";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header className="fixed left-0 top-0 w-full bg-amber-200 rounded-lg border-3 text-black border-amber-400">
        <div className="gdfg">Notes</div>
        <Nav className="flex flex-row gap-3" />
      </header>
    </>
  );
}
