import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const toggleBurger = () => {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".navbar-menu");
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  };
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <Link className='navbar-item' href='/'>
            TSAMH Directory
          </Link>
          <div
            className='navbar-burger burger'
            data-target='navbarExampleTransparentExample'
            onClick={toggleBurger}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id='navbarExampleTransparentExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item' href='/find'>
              Directory
            </a>
            <a className='navbar-item' href='/find'>
              By City
            </a>
            <a className='navbar-item' href='/info'>
              Info
            </a>
            <a className='navbar-item' href='/info'>
              Community
            </a>
            <a className='navbar-item' href='/news'>
              News
            </a>
            <a className='navbar-item' href='/about'>
              About
            </a>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <div className='field has-addons'>
                  <div className='control'>
                    <input
                      class='input'
                      type='text'
                      placeholder='Find out more...'
                    />
                  </div>
                  <div className='control'>
                    <a className='button is-info'>Search</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
