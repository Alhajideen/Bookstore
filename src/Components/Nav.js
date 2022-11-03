import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <div>
      <header className="header">
        <nav className="nav-bar">
          <ul className="nav-links">
            <li className="logo">Bookstore CMS</li>
            <li className="book-cat">BOOKS</li>
            <li className="book-cat">CATEGORIES</li>
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
}

export default Nav;
