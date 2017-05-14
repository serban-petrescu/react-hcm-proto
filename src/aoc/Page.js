import React from 'react';
import DetailContainer from "./DetailContainer";
import PanelContainer from "./PanelContainer";
import DetailEmpty from "./DetailEmpty";
import { Route } from 'react-router-dom';

export default () => (
    <div className="section">
        <div className="columns">
            <div className="column is-one-third">
                <PanelContainer />
            </div>
            <div className="column">
                <Route path="/aoc" exact component={DetailEmpty}/>
                <Route path="/aoc/:id" exact component={DetailContainer}/>
            </div>
        </div>
    </div>
);