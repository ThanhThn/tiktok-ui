function logger(reducer){
    return ( prevState, action ) => {
        console.group(action.type)
        console.
        const nextState = reducer(prevState, action)
        console.groupEnd()
        return nextState
    }
}