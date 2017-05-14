import React from 'react';

export default ({value, label, options, change}) => (
    <div className="field">
        <label className="label">{label}</label>
        <p className="control">
            <span className="select is-fullwidth">
                <select value={value} onChange={change}>
                {
                    options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)
                }
                </select>
            </span>
        </p>
    </div>
);
