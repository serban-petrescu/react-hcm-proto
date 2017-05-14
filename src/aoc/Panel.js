import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({aoc}) => (
    <article className="message is-primary">
        <div className="message-header">
            <p>Areas of Competency</p>
        </div>
        <div className="message-body is-paddingless">
            <nav className="panel">                
            {
                Object.keys(aoc).map((i) => (
                    <NavLink className="panel-block" key={i} to={'/aoc/' + i} 
                        exact={false} activeClassName="is-active">
                        <span className="panel-icon">
                            <i className={'fa fa-' + (aoc[i].asTable ? 'table' : 'pie-chart')}/>
                        </span>
                        {aoc[i].name}
                    </NavLink>
                ))
            }
            </nav>
        </div>
    </article>
);