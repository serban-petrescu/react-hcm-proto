import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="hero-head">
    <header className="nav">
      <div className="nav-left">
        <a className="nav-item">
          <h2>HCM Prototype</h2>
        </a>
      </div>
      <div className="nav-right nav-menu">
        <NavLink className="nav-item" activeClassName="is-active" to="/" exact={true}>
            <span className="icon is-small"><i className="fa fa-home"/></span>
            Home
        </NavLink>
        <NavLink to="/aoc" className="nav-item" activeClassName="is-active">Competencies</NavLink>
        <NavLink to="/profile" className="nav-item" activeClassName="is-active">Profiles</NavLink>
        <NavLink to="/employee" className="nav-item" activeClassName="is-active">Employees</NavLink>
      </div>
    </header>
  </div>
);
