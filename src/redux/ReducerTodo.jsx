import uuid from "react-uuid"

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

    return newState
}

export default ReducerTodo