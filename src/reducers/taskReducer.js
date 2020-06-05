import { v4 as uuidv4 } from 'uuid';
import { GET_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';

const initialState = {
    tasks: [
        { id: uuidv4(), name: 'Monthly presentation'},
        { id: uuidv4(), name: 'Off'},
        { id: uuidv4(), name: 'Negotiation with client from Jakarta'},
        { id: uuidv4(), name: 'Meet new rookie'},
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state;
    }
}