import {Reducer } from "react";
import Content from "../Content";
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