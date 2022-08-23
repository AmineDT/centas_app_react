import React, {useState, createContext} from "react";

export const CommandsContext = createContext();

export const CommandsContextProvider = props => {
    const [commands, setCommands] = useState([]);
    const [selectedCommand, setSelectedCommand] = useState(null)

    const addCommands = (command) => {
        setCommands([...commands, command]);
    }

    return (
        <CommandsContext.Provider value={{commands, setCommands, addCommands, selectedCommand, setSelectedCommand}}>
            {props.children}
        </CommandsContext.Provider>
    )
}