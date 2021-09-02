import { REMOVE, ADD, EDIT } from './type'
export const Remove = (id) => ({
    type: REMOVE,
    payload: {
        id
    }
})
export const Add = (sv) => ({
    type: ADD,
    payload: {
        sv
    }
})
export const Update = (sv) => ({
    type: EDIT,
    payload: {
        sv
    }
})