import React from 'react';

export default ({data, columns, remove}) => (
    <table className="table is-marginless">
        <thead>
            <tr>
                {
                    columns.map(function(col, i) {
                        return <th key={ i } style={col.style || {}} >{ col.name }</th>
                    })
                }
                {
                    remove ? <th style={ {width: "1rem"} }></th> : ''
                }
            </tr>
        </thead>
        <tbody>
        {
            Object.keys(data).map( id => (
                <tr key={ id }>
                    {
                        columns.map(function(col, i) {
                            return <td key={ id + '-' + i } >{ data[id][col.key] }</td>
                        })
                    }
                    {
                        remove ? <td><a className="delete" onClick={ (e) => { remove(id); e.preventDefault(); } }/></td> : ''
                    }
                </tr>
            ) )
        }
        </tbody>
    </table>
);