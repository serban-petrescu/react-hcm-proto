import React from 'react';
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import Table from "../common/Table";
import CreateField from "../common/CreateField";

export default ({area, handlers}) => (
    <div>
        <article className="message is-primary">
            <div className="message-header">
                <p>Info</p>
            </div>
            <div className="columns message-body is-marginless is-paddingless">
                <div className="column">
                    <InputField label="Name" value={area.name} change={handlers.name}/>
                </div>
                <div className="column">
                    <SelectField label="Type" value={area.asTable.toString()} change={handlers.asTable}
                        options={[{value: "true", label: "Table"}, {value: "false", label: "Chart"}]}/>
                </div>
            </div>
        </article>
        <article className="message is-primary">
            <div className="message-header">
                <p>Skills</p>
            </div>
            <div className="message-body is-marginless">
                <CreateField placeholder="Skill name..." create={ handlers.skill.create } />
                <Table data={ area.skill } columns={ [{key: "name", name: "Name"}] } remove={ handlers.skill.remove} />
            </div>
        </article>
    </div>
);
