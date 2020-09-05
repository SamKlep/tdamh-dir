import React from "react";
import Main from "./Main";

const Navigation = () => {
  const toggleMenu = () => {
    this.state.showMenu = !this.state.showMenu;
  };
  return (
    <div className='columns'>
      <div className='column is-4-tablet is-3-desktop is-2-widescreen'>
        <nav className='menu'>
          <p className='menu-label'>Menu</p>
          <ul className='menu-list'>
            <li>
              <a href='/'>
                <span className='icon'>
                  <i className='fa fa-tachometer'></i>
                </span>
                Dashboard
              </a>
            </li>
            <li>
              <a className='is-active' href='books.html'>
                <span className='icon'>
                  <i className='fa fa-book'></i>
                </span>
                Books
              </a>
            </li>
            <li>
              <a href='/'>
                <span className='icon'>
                  <i className='fa fa-address-book'></i>
                </span>
                Customers
              </a>
            </li>
            <li>
              <a href='/'>
                <span className='icon'>
                  <i className='fa fa-file-text-o'></i>
                </span>
                Orders
              </a>
            </li>
            <li>
              <a href='/'>
                <span className='icon'>
                  <i className='fa fa-address-book'></i>
                </span>
                Customers
              </a>
            </li>
            <li>
              <a href='/'>
                <span className='icon'>
                  <i className='fa fa-file-text-o'></i>
                </span>
                Orders
              </a>
            </li>
            <li>
              <a href='/'>
                <span className='icon'>
                  <i className='fa fa-address-book'></i>
                </span>
                Customers
              </a>
            </li>
            <li>
              <a href='/'>
                <span className='icon'>
                  <i className='fa fa-file-text-o'></i>
                </span>
                Orders
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='column'>
        <Main />
      </div>
    </div>
  );
};

export default Navigation;
