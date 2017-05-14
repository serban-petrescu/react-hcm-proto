import React from 'react';
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import SkillTable from "./SkillTable";

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
        <SkillTable />
    </div>
);
