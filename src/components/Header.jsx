import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Groceries</h1>
            <NavLink to="/edit" activeClassName="no-active-link">
              <i className="material-icons">edit</i>
            </NavLink>
            <NavLink exact to="/" activeClassName="no-active-link">
              Done
            </NavLink>
        </header>
    );
}

export default Header;
