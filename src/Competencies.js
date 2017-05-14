import React from 'react';
import { Route } from 'react-router-dom';
import { PanelLink } from "./Links";
import Store from "./Store";


const DisplaySelectField = ({id, value}) => (
    <div className="field">
        <label className="label">Display</label>
        <p className="control">
            <span className="select is-fullwidth">
                <select value={value} 
                    onChange={ e => Store.aoc.update({id: id, asTable: e.target.value === "true"}) }>
                    <option value="true">Table</option>
                    <option value="false">Chart</option>
                </select>
            </span>
        </p>
    </div>
);

const NameInputField = ({id, value}) => (
    <div className="field">
        <label className="label">Name</label>
        <p className="control">
            <input className="input" type="text" value={value} 
                onChange={ e => Store.aoc.update({id: id, name: e.target.value}) }/>
        </p>
    </div>
);

const Detail = ({area}) => (
    <article className="message is-primary">
        <div className="message-header">
            <p>Info</p>
        </div>
        <div className="columns message-body is-marginless is-paddingless">
            <div className="column">
                <NameInputField id={area.id} value={area.name}/>
            </div>
            <div className="column">
                <DisplaySelectField id={area.id} value={area.asTable}/>
            </div>
        </div>
    </article>
);

export default ({aoc}) => (
    <div className="section">
        <div className="columns">
            <div className="column is-narrow">
                <Panel aoc={aoc} />
            </div>
            <div className="column">
                <Route path="/aoc" exact component={EmptyDetail}/>
                <Route path="/aoc/:id" exact component={(route) => <Detail key={route.match.params.id} 
                    area={aoc[route.match.params.id]} />}/>
            </div>
        </div>
    </div>
);