import { createStore, combineReducers } from 'redux';
import mock from "./mock";

function skillReducer(state, action) {
    switch (action.type) {
    case "SKILL_CREATE":
        let maxId = parseInt(Math.max(...Object.keys(state)), 10) || 0,
            newId = (maxId + 1).toString();
        return {
            ...state,
            [newId]: {
                id: newId,
                name: action.name
            }
        };
    case "SKILL_DELETE":
        let newState = {...state};
        delete newState[action.skillId];
        return newState;
    default:
        return state;
    }   
}

function aocReducer(state = mock.aoc, action) {
    switch (action.type) {
    case "AOC_UPDATE":
        let currentAoc = state[action.id];
        return {
            ...state,
            [action.id]: {
                ...currentAoc,
                name: action.hasOwnProperty("name") ? action.name : currentAoc.name,
                asTable: action.hasOwnProperty("asTable") ? action.asTable : currentAoc.asTable
            }
        };
    case "AOC_DELETE":
        let newState = {...state};
        delete newState[action.id];
        return newState;
    case "AOC_CREATE":
        let maxId = parseInt(Math.max(...Object.keys(state)), 10) || 0,
            newId = (maxId + 1).toString(); 
        return {
            ...state,
            [newId]: {
                id: newId,
                name: action.name,
                asTable: action.asTable,
                skill: {}
            }
        }
    case "SKILL_CREATE":
    case "SKILL_DELETE":
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                skill: skillReducer(state[action.id].skill, action)
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
    "create": a => store.dispatch({...a, type: "AOC_CREATE"}),
    "update": a => store.dispatch({...a, type: "AOC_UPDATE"}),
    "remove": a => store.dispatch({...a, type: "AOC_DELETE"}),
    "skill": {
        "create": a => store.dispatch({...a, type: "SKILL_CREATE"}),
        "remove": a => store.dispatch({...a, type: "SKILL_DELETE"})
    }
};

export default store;
export {aoc};
