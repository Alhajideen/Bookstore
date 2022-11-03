import React from 'react';

function Nav() {
  return (
    <div>
      <header className="header">
        <nav className="nav-bar">
          <ul className="nav-links">
            <li className="logo">bookstore CMS</li>
            <li>BOOKS</li>
            <li>CATEGORIES</li>
          </ul>
          <div className="avatar">
            <img src="" alt="display picture" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
