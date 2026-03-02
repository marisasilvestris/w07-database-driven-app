import Button from "../components/Button";
import SubmitNote from "../components/SubmitNote";

export default function HomePage() {
  return (
    <>
      <h1 className="test">hey y'all this is a notepad</h1>
      <p>pleas treat her gently her code is fragil as eff</p>
      <SubmitNote className={`w-128 h-128 max-w-screen`} />
    </>
  );
}
