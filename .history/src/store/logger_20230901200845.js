function logger(reducer){
    return ( prevState, action ) => {
        console.group(action.type)
        
        const nextState = reducer(prevState, action)
        return nextState
    }
}