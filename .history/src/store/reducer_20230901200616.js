import { SET_TODO_INPUT} from './constants'
const initState = {
    todos: [],
    todoInput:''
}

function reducer(state, action){
    switch(action.type){
        case SET_TODO_INPUT: return {
            ...state,
            todoInput: action.pay
        }
    }
}

export {initState}
export default reducer