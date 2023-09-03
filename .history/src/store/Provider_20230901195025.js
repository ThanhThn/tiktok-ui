import { useReducer } from "react";
import Context from "./Context";
import reducer,{initState} from "./reducer";

function Provider ({children}){
    const [state, dispatch] = useReducer(reducer,initState)
    return(
        <Content.Provider value = {[state, dispatch]}>
            {children}
        </Content.Provider>
    )
}

export default Provider