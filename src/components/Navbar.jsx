import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-200 h-[10vh] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <div className="space-x-4 text-red-600">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}