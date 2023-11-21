import * as types from './ActionTypes'


export const addtache = (text) => {
    return {
        type: types.ADD_TACHE,
        payload: text
    }
}

export const deletetache = (id) => {
    return {
        type: types.DELETE_TACHE,
        payload: id
    }
}

export const updatetache = (id) => {
    return {
        type: types.UPDATE_TACHE,
        payload: id
    }
}

export const deleteall = () => {
    return {
        type: types.DELETE_ALL,
    }
}

export const deletetermines = () => {
    return {
        type: types.DELETE_TER,
    }
}

export const deletenontermines = () => {
    return {
        type: types.DELETE_NOTERM,
    }
}