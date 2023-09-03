import { useReducer } from "react";
import Content from "../Con";
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