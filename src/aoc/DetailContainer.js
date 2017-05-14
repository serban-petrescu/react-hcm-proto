import { connect } from 'react-redux';
import React from 'react';
import Detail from "./Detail";
import { aoc } from "../data/Store";

const DetailContainer = ({area}) => (
    <Detail area={area} handlers={{
        name: e => aoc.update({id: area.id, name: e.target.value}),
        asTable: e => aoc.update({id: area.id, asTable: e.target.value === "true"})
    }} />
); 

const mapStateToProps = (state, ownProps) => {
    return {
        area: state.aoc[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps)(DetailContainer);