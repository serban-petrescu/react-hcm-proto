import React from 'react';

export default ({value, label, change}) => (
    <div className="field">
        <label className="label">{label}</label>
        <p className="control">
            <input className="input" type="text" value={value} onChange={change}/>
        </p>
    </div>
);
