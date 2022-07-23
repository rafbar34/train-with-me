import React from 'react';
import {NavLink} from 'react-router-dom';
import logoWebiste from '../images/logo.png';

export const UIMenu = () => {
  return (
    <section className='menu'>
      <div className='menu-links'>
        <span className=' about'>
          {' '}
          <h2>
            <NavLink
              to='/'
              style={{textDecoration: 'none', opacity: '0.7', color: 'white'}}
            >
              {' '}
              {<img src={logoWebiste}></img>}
            </NavLink>
          </h2>{' '}
        </span>
        <span className='headers form'> </span>
        <span className='headers techniques'>
          {' '}
          <h2>
            {' '}
            <NavLink
              to='/techniques'
              style={{textDecoration: 'none', color: 'white'}}
            >
              Techniques
            </NavLink>
          </h2>
        </span>
        <span className='headers facts'>
          {' '}
          <h2>
            <NavLink
              to='/facts'
              style={{textDecoration: 'none', color: 'white'}}
            >
              Facts
            </NavLink>
          </h2>
        </span>
        <span className='headers contacts'>
          {' '}
          <h2>
            <NavLink
              to='/contacts'
              style={{textDecoration: 'none', color: 'white'}}
            >
              {' '}
              Contacts
            </NavLink>
          </h2>
        </span>
      </div>
      <section className='registersbtn'>
        <div className='register'>
          <div className='buttonslogin'>
            <button className='registerbtn'>
              <NavLink
                to='/login'
                style={{textDecoration: 'none', color: 'black'}}
              >
                <b>Login</b>
              </NavLink>
            </button>

            <div className='register'>
              <button className='registerbtn'>
                <NavLink
                  to='/joinus'
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <b>Join us</b>
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
