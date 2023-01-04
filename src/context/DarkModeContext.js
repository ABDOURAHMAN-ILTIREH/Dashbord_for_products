import { createContext, useReducer} from "react";
import useDarkReducer from "./useDarkReducer";


const initial_state = {
    darkMode : true
}

export const DarkModeContext = createContext(initial_state);

export const DarkModeContextProvider  = ({children}) => {

    const [state, dispatch] = useReducer(useDarkReducer,initial_state);

    return (
    <DarkModeContext.Provider value={{darkMode : state.darkMode, dispatch}}>
        {children}
    </DarkModeContext.Provider>
    )
}