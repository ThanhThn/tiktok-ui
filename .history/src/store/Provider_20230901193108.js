import Content from "../Content";

function Provider ({children}){
    return(
        <Content.Provider value = {}>
            {children}
        </Content.Provider>
    )
}

export default Provider