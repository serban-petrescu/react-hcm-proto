import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

export default ({to, label, icon, exact }) => (
 <Route path={to} exact={exact} children={({ match }) => (
    <Link className={'nav-item ' + (match ? 'is-active' : '')} to={to}>
        { icon ? <span className="icon is-small"><i className={'fa fa-' + icon}></i></span> : ''} 
        {label}
    </Link>
  )}/>
);
