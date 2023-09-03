function logger(reducer){
    return ( prevState, action ) => {
        console.group(action.ty)
        const nextState = reducer(prevState, action)
        return nextState
    }
}