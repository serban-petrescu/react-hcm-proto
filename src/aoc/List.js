import React from 'react';
import { Link } from 'react-router-dom';
import Table from "../common/Table";
import CreateField from "../common/CreateField";

function mapAocs(aoc) {
    let result = {};
    Object.keys(aoc).forEach(k => {
        result[k] = {
            id: aoc[k].id,
            name: <Link to={ 'aoc/' + k }>{ aoc[k].name }</Link>,
            icon: <i className={'fa fa-' + (aoc[k].asTable ? 'table' : 'pie-chart')}/>
        };
    });
    return result;
}

export default ({ aoc, handlers }) => (
    <article className="message is-primary">
        <div className="message-header">
            <p>Areas of Competency</p>
        </div>
        <div className="message-body is-marginless">
            <CreateField placeholder="Area name..." create={ handlers.create } />
            <Table remove={ handlers.remove} data={ mapAocs(aoc) }
                columns={ [{key: "icon", name: "", style: {width: "1.25em"}}, {key: "name", name: "Name"}] } />
        </div>
    </article>
);