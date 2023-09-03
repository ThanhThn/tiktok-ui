import { useReducer } from "react";
import Content from "../Content";

function Provider ({children}){
    const [state, dispatch] = useReducer()
    return(
        <Content.Provider value = {[state, dispatch]}>
            {children}
        </Content.Provider>
    )
}

export default Provider