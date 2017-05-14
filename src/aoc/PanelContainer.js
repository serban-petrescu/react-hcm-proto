import { connect } from 'react-redux';
import Panel from  "./Panel";
import React from 'react';

const mapStateToProps = s => {
    return  {
        aoc: s.aoc
    };
};

export default connect(mapStateToProps, null, null, {pure: false})(p => <Panel {...p} />);