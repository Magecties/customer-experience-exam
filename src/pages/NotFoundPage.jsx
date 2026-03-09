import { Link } from "react-router";
import "../css/not-found.css";
import vindheksIcon from "../img/vindheks.svg";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <header className="not-found-header">
        <img className="not-found-image" src={vindheksIcon} alt="Not Found" />
        <h1 className="not-found-title">404 - Page Not Found</h1>
      </header>
      <main className="not-found">
        {/* <p>Sorry, the page you're looking for doesn't exist.</p> */}
        <Link to="/" className="not-found-link">
          Go back
        </Link>
      </main>
    </div>
  );
}
