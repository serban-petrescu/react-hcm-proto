import { connect } from 'react-redux';
import List from  "./List";
import React from 'react';
import { aoc } from "../data/Store";

const ListContainer = (data) => (
    <List aoc={ data.aoc } handlers={ {
        create: name => {
            aoc.create({name: name, asTable: false});
            return "";
        },
        remove: id => aoc.remove({id: id})
    } } />
);

const mapStateToProps = s => {
    return  {
        aoc: s.aoc
    };
};

export default connect(mapStateToProps, null, null, {pure: false})(ListContainer);