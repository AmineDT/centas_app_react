import React, {useState, createContext} from "react";

export const ContractsContext = createContext();

export const ContractsContextProvider = props => {
    const [contracts, setContracts] = useState([]);
    const [selectedContract, setSelectedContract] = useState(null)

    const addContracts = (contract) => {
        setContracts([...contracts, contract]);
    }

    return (
        <ContractsContext.Provider value={{contracts, setContracts, addContracts, selectedContract, setSelectedContract}}>
            {props.children}
        </ContractsContext.Provider>
    )
}