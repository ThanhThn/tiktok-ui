function logger(reducer){
    return ( prevState, action ) => {
        console.group(action.type)
        console.log("Prev state: ", prevState);
        console.log();
        const nextState = reducer(prevState, action)
        console.groupEnd()
        return nextState
    }
}