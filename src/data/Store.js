import { createStore, combineReducers } from 'redux';
import mock from "./mock";

function aocReducer(state = mock.aoc, action) {
    switch (action.type) {
    case "UPDATE":
        let currentAoc = state[action.id];
        return {
            ...state,
            [action.id]: {
                ...currentAoc,
                name: action.hasOwnProperty("name") ? action.name : currentAoc.name,
                asTable: action.hasOwnProperty("asTable") ? action.asTable : currentAoc.asTable
            }
        };
    case "DELETE":
        let newState = {...state};
        delete newState[action.id];
        return newState;
    case "CREATE":
        let maxId = parseInt(Math.max(...Object.keys(state)), 10) || 0,
            newId = (maxId + 1).toString(); 
        return {
            ...state,
            [newId]: {
                id: newId,
                name: action.name,
                asTable: action.asTable,
                skills: {}
            }
        }
    default:
        return state;
    }
}

const store = createStore(combineReducers({
    aoc: aocReducer
}), mock);

const aoc = {
    "create": a => store.dispatch({...a, type: "CREATE"}),
    "update": a => store.dispatch({...a, type: "UPDATE"}),
    "remove": a => store.dispatch({...a, type: "DELETE"})
};

export default store;
export {aoc};
