function logger(reducer){
    return ( prevState, action ) => {
        console.group(action.type)
        console.log("PRe")
        const nextState = reducer(prevState, action)
        console.groupEnd()
        return nextState
    }
}