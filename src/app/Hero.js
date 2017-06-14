import React from 'react';
import Header from "./Header";
import Home from "./Home";
import { Route } from 'react-router-dom';
import AocDetailContainer from "../aoc/DetailContainer";
import AocListContainer from "../aoc/ListContainer";

export default ({isFullHeight}) => (
    <div>
        <section className={'hero is-primary' + (isFullHeight ? ' is-fullheight' : '')}>
            <Header />
            <Route exact={true} path="/" component={Home}/>
        </section>
        <section className="section">
            <Route path="/aoc" exact component={AocListContainer}/>
            <Route path="/aoc/:id" exact component={AocDetailContainer}/>
        </section>
    </div>
);