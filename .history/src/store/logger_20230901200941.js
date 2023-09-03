function logger(reducer){
    return ( prevState, action ) => {
        console.group(action.type)
        console.log("Prev state: ", prevState);
        con
        const nextState = reducer(prevState, action)
        console.groupEnd()
        return nextState
    }
}