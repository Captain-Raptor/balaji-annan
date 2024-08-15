import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "./logo.svg";
import "./Header.css";
import { IoMdLogOut } from "react-icons/io";
import { useScroll } from "./hooks/useScroll";
import { useMenuState } from "./hooks/useMenuState";
import { isAllowedRoute } from "./utils";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const location = useLocation();
  const careersBaseRoute = "/careers";
  const productsBaseRoute = "/products";
  const isLoggedIn = true;

  const isScrolled = useScroll();
  const [headerMenu, toggleMenu] = useMenuState();

  const isAllowedCareersRoute = isAllowedRoute(location.pathname, careersBaseRoute);
  const isAllowedProductsRoute = isAllowedRoute(location.pathname, productsBaseRoute);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const openProfileDropdown = () => {
    setProfileDropdownVisible(true);
  };

  const closeProfileDropdown = () => {
    setProfileDropdownVisible(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={companyLogo} alt="Company Logo" />
      </div>

      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav__links">
          {headerMenu.map((item, index) => (
            <li key={index} className={`nav--link ${item.isSubmenuOpen ? "hover" : ""}`}>
              {item.submenu ? (
                <div onClick={() => toggleMenu(index)} className="menu-item-with-submenu">
                  <div className="menu-item-content">
                    {item.icon}
                    <span>{item.name.en}</span>
                  </div>
                  <div className="submenu-icon">
                    {item.isSubmenuOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </div>
              ) : (
                <Link to={item.url} onClick={handleToggleMenu}>
                  <div className="menu-item-content">
                    {item.icon}
                    <span>{item.name.en}</span>
                  </div>
                </Link>
              )}

              {item.submenu && item.isSubmenuOpen && (
                <ul className="submenu">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex} className="submenu-items">
                      <Link to={subitem.url} onClick={handleToggleMenu}>
                        {subitem.name.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-buttons">
          {isLoggedIn && (
            <div
              className="header-profile"
              onMouseEnter={openProfileDropdown}
              onMouseLeave={closeProfileDropdown}
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="Profile"
                className="header-profile-image"
              />

              {isProfileDropdownVisible && (
                <ul className="profile-dropdown">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              )}
            </div>
          )}

          {isAllowedCareersRoute && (
            <Link to="/login-careers" className="header-btn">
              Careers Login
            </Link>
          )}
          {isAllowedProductsRoute && (
            <Link to="/product-login" className="header-btn">
              Products Login
            </Link>
          )}
          {!isAllowedCareersRoute && !isAllowedProductsRoute && (
            <Link to="/get-started" className="header-btn">
              Get Started
            </Link>
          )}
        </div>

        <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={handleToggleMenu}>
          {isMenuOpen ? <FiX className="close-icon" /> : <FiMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
