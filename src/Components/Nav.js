import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => (
  <div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <ToastContainer />
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-links">
          <li className="logo">Bookstore CMS</li>
          <Link to="/">
            <li className="book-cat">BOOKS</li>
          </Link>
          <Link to="/categories">
            <li className="book-cat">CATEGORIES</li>
          </Link>
        </ul>
        <div className="avatar">
          <span>
            <FontAwesomeIcon className="user-circle" icon={faUserCircle} />
          </span>
        </div>
      </nav>
    </header>
  </div>
);

export default Nav;
