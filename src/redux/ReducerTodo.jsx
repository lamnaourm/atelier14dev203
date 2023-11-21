import uuid from "react-uuid"
import * as types from './ActionTypes'


const initial_state = {
    tasks: [
        {
            id: uuid(),
            task: "Reviser Javascript",
            completed: false
        },
        {
            id: uuid(),
            task: "Reviser Javas",
            completed: true
        },
        {
            id: uuid(),
            task: "Reviser Python",
            completed: false
        }
    ]

}

const ReducerTodo = (state = initial_state, action) => {
    let newState = { ...state }

    switch (action.type) {
        case types.ADD_TACHE:
            newState.tasks = [...newState.tasks, {id:uuid(),completed:false, task:action.payload}]
            break;
        case types.DELETE_TACHE: 
            newState.tasks = newState.tasks.filter(t => t.id != action.payload)
        break;
        case types.UPDATE_TACHE: 
            newState.tasks = newState.tasks.map(t => t.id == action.payload ? {...t, completed:!t.completed} :t)
        break;
        case types.DELETE_ALL: 
            newState.tasks = []
        break;
        case types.DELETE_TER: 
            newState.tasks = newState.tasks.filter(t => !t.completed)
        break;
        case types.DELETE_NOTERM: 
            newState.tasks = newState.tasks.filter(t => t.completed)
        break;
    }


    return newState
}

export default ReducerTodo