function logger(reducer){
    return ( prevState, action ) => {
        console.group(action.type)
        console.log("Prev state: ", prevState);
        console.log("Action: ", action);
        const nextState = reducer(prevState, action)

        console.
        console.groupEnd()
        return nextState
    }
}