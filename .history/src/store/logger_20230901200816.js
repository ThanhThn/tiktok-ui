function logger(reducer){
    return ( prevState, action ) => {
        const neState = reducer(prevState, action)
        return nextState
    }
}