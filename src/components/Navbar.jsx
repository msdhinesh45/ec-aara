import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaUser, FaSignInAlt } from "react-icons/fa";
import './Global.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(2);
  const [cartTotal, setCartTotal] = useState(25.99);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Shop",
      link: "/menu",
      subItems: ["Cart", "Checkout", "My account", "Compare", "Order Tracking", "Shipping"],
    },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const results = [
      { id: 1, name: "Pizza Margherita", price: 12.99 },
      { id: 2, name: "Chicken Pasta", price: 14.99 },
      { id: 3, name: "Vegetarian Salad", price: 9.99 },
    ].filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-light shadow" style={{ backgroundColor: "#8a2b6d", position: "sticky", top: "0", zIndex: "10" }}>
      <div className="container-fluid">
        <img
          className="navbar-brand fw-bold rounded-circle"
          src="https://aaradesigner.com/storage/2025/07/aara-designer-studio-main-logo.jpg"
          height="70"
          width="70"
          alt="Logo"
        />
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`nav-item ${item.subItems ? "dropdown" : ""}`}
              >
                <a
                  href={item.link}
                  className={`nav-link ${item.subItems ? "dropdown-toggle d-flex align-items-center" : ""}`}
                  data-bs-toggle={item.subItems ? "dropdown" : ""}
                  role="button"
                  aria-expanded="false"
                >
                  {item.name}
                </a>
                {item.subItems && (
                  <ul className="dropdown-menu">
                    {item.subItems.map((subItem) => (
                      <li key={subItem}>
                        <a className="dropdown-item" href="#">
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center flex-column flex-md-row">
            {/* Search */}
            <form className="d-flex position-relative me-0 me-md-3 mb-2 mb-md-0">
              <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
                <FaSearch />
              </span>
              <input
                className="form-control ps-5 rounded-pill"
                type="search"
                placeholder="Search dresses..."
                value={searchQuery}
                onChange={handleSearch}
              />
              {searchResults.length > 0 && (
                <div className="position-absolute bg-white shadow rounded w-100 mt-2" style={{ zIndex: 1000, top: "100%" }}>
                  {searchResults.map((result) => (
                    <a
                      key={result.id}
                      href="#"
                      className="dropdown-item"
                    >
                      {result.name} - ${result.price.toFixed(2)}
                    </a>
                  ))}
                </div>
              )}
            </form>

            {/* Cart */}
            <div className="nav-item dropdown me-0 me-md-3 mb-2 mb-md-0">
              <button
                className="btn btn-warning position-relative rounded-circle d-flex align-items-center justify-content-center top-0 mx-3"
                style={{ width: "40px", height: "40px" }}
                onClick={toggleCart}
              >
                <FaShoppingCart />
                {cartItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartItems}
                  </span>
                )}
              </button>
              {isCartOpen && (
                <div className="dropdown-menu dropdown-menu-end show p-3" style={{ width: "250px", right: 0, left: "auto" }}>
                  <h6 className="fw-bold mb-2">Your Cart</h6>
                  <p className="mb-2">Total: ${cartTotal.toFixed(2)}</p>
                  <hr className="dropdown-divider" />
                  <div className="d-flex justify-content-between mt-2">
                    <a href="#" className="btn btn-sm btn-outline-primary">View Cart</a>
                    <a href="#" className="btn btn-sm btn-primary">Checkout</a>
                  </div>
                </div>
              )}
            </div>

            {/* Login/Register */}
            <a
              href="/login"
              className="btn btn-outline-light d-flex align-items-center"
            >
              <FaUser className="me-1" />
              <FaSignInAlt className="me-1" />
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;