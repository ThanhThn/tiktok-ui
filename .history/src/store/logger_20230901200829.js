function logger(reducer){
    return ( prevState, action ) => {
        console.group()
        const nextState = reducer(prevState, action)
        return nextState
    }
}