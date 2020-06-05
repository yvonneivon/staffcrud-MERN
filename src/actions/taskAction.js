import axios from 'axios';
import { GET_TASKS, ADD_TASK, DELETE_TASK, TASKS_LOADING } from './types';

export const getTasks = () => dispatch => {
    dispatch(setTasksLoading());
    axios
        .get('/api/tasks')
        .then(res => 
            dispatch({
                type: GET_TASKS,
                payload: res.data
            })
        )
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    };
};

export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    };
};

export const setTasksLoading = () => {
    return {
        type: TASKS_LOADING
    }
}