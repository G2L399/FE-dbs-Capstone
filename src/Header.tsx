import { FaHome, FaBookmark, FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header({ className }: { className?: string }) {
  return (
    <header className={className}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">YuDeGo</h1>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-purple-300">
            <FaHome className="text-xl" />
          </Link>
          <Link to="/bookmarks" className="hover:text-purple-300">
            <FaBookmark className="text-xl" />
          </Link>
          <Link to="/notifications" className="hover:text-purple-300">
            <FaBell className="text-xl" />
          </Link>
          <Link
            to="/account"
            className="flex items-center space-x-2 bg-purple-800/50 px-4 py-2 rounded-full hover:bg-purple-800"
          >
            <FaUserCircle className="text-xl" />
            <span>Account</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
