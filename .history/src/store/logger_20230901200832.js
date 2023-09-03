function logger(reducer){
    return ( prevState, action ) => {
        console.group(action.)
        const nextState = reducer(prevState, action)
        return nextState
    }
}