import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { auth } from "../../firebase";

const Navbar = ({ user }) => {
  console.log(user);
  function logout() {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <nav className={styles.navbar}>
      <span
        className={styles.navbarToggle}
        onClick={() =>
          document.getElementById("js-menu").classList.toggle(styles.active)
        }
      >
        <i className="material-icons">menu</i>
      </span>
      <NavLink exact to="/" className={styles.logo}>
        MovieFlex
      </NavLink>
      <ul className={styles.mainNav} id="js-menu">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            Home
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              to="/explore"
              activeClassName={styles.navLinksActive}
              className={styles.navLinks}
            >
              Trending
            </NavLink>
          </li>
        )}
        {user && (
          <li>
            <NavLink
              to="/chat"
              activeClassName={styles.navLinksActive}
              className={styles.navLinks}
            >
              Chat
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/about"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            About
          </NavLink>
        </li>
      </ul>
      <div className={styles.search}>
        {!user ? (
          <NavLink
            to="/login"
            activeClassName={styles.navLinksActive}
            className={styles.navLinks}
          >
            <i className="material-icons">
              <span>login</span>
            </i>
          </NavLink>
        ) : (
          <span onClick={() => logout()}>{user?.email}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
