export default function Footer() {
  return <div className="text-center">
    <p>&copy; {new Date().getFullYear()} Walutomat.</p>
    <p><a href="/regulation">Regulamin</a></p>
  </div>
}