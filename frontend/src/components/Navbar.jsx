import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";

export default function Navbar({ search, setSearch }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      {/* HOME */}
      <div
        className="nav-home"
        onClick={() => navigate("/")}
        title="Go to Home"
      >
        🏠 <span>Home</span>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        className="nav-search"
        placeholder="Search Amazon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* PROFILE */}
      <div
        className="profile"
        ref={profileRef}
        onClick={() => setOpen(prev => !prev)}
      >
        👤
        {open && (
          <div className="dropdown">
            <Link to="/cart" onClick={() => setOpen(false)}>
              My Cart
            </Link>
            <Link to="/orders" onClick={() => setOpen(false)}>
              My Orders
            </Link>
            <Link to="/wishlist">My Wishlist</Link>

          </div>
        )}
      </div>
    </div>
  );
}
