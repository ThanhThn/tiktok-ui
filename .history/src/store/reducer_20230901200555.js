import { SET_TODO_INPUT} from './constants'
const initState = {
    todos: [],
    todoInput:''
}

function reducer(state, action){
    switch(action.type){
        case SET_TODO_INPUT: return {
            ...state,
            to
        }
    }
}

export {initState}
export default reducer