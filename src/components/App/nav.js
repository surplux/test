import React from 'react';
import { Link } from 'react-router';

const Nav = () => <div className="nav-bar">
  <Link to="/">Home</Link>
  <Link to="/categories">Categories</Link>
</div>;

export default Nav;
