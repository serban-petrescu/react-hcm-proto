import { connect } from 'react-redux';
import React from 'react';
import Detail from "./Detail";
import { aoc } from "../data/Store";

const DetailContainer = ({area}) => (
    <Detail area={area} handlers={{
        name: e => aoc.update({id: area.id, name: e.target.value}),
        asTable: e => aoc.update({id: area.id, asTable: e.target.value === "true"}),
        skill: {
            create: name => {
                aoc.skill.create({id: area.id, name: name});
                return "";
            },
            remove: skillId => aoc.skill.remove({id: area.id, skillId: skillId})
        }
    }} />
); 

const mapStateToProps = (state, ownProps) => {
    return {
        area: state.aoc[1]
    };
};

export default connect(mapStateToProps)(DetailContainer);