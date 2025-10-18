import { Link } from "react-router";

export default function Footer() {
  return <div className="text-center">
    <p>&copy; {new Date().getFullYear()} Walutomat.</p>
    <p><Link to="/regulamin">Regulamin</Link></p>
  </div>
}