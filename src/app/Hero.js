import React from 'react';
import Header from "./Header";
import Home from "./Home";
import { Route } from 'react-router-dom';
import AocPage from "../aoc/Page";

export default ({isFullHeight}) => (
    <div>
        <section className={'hero is-primary' + (isFullHeight ? ' is-fullheight' : '')}>
            <Header />
            <Route exact={true} path="/" component={Home}/>
        </section>
        <Route path="/aoc" component={AocPage}/>
    </div>
);