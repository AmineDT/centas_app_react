import React from "react";
import { useContext } from "react";
import { useState } from "react";
import CommandsFinder from "../../apis/CommandsFinder";
import { CommandsContext } from "../../context/CommandsContext";
import { useNavigate } from "react-router-dom";


const AddCommand = () => {
  let navigate = useNavigate();
  const { addCommands } = useContext(CommandsContext);
  const [commandNumber, setCommandNumber] = useState("");
  const [commandStartDate, setCommandStartDate] = useState("");
  const [commandAmount, setCommandAmount] = useState("");
  const [contractName, setContractName] = useState("");

  // Function associated to the "add" button
  const handleSubmit = async (e) => {
    e.preventDefault();   //Prevent the submit button from submiting a form
    try {
      const response = await CommandsFinder.post("/", {
        command_number: commandNumber,
        command_start_date: commandStartDate,
        command_amount: commandAmount,
        contract_name: contractName,
      });
      addCommands(response.data.data.command);
      console.log(response);
      navigate("/commandes");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-3 mx-5">
      <h1 style={{textAlign: "center"}}>Création de commande</h1>
      <form>
        <div className="form-group">
          <div className="col">
            <label className="pr-2" htmlFor="command_name">
              Numéro de commande
            </label>
            <input
              value={commandNumber}
              onChange={(e) => setCommandNumber(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Veuillez entrer le numéro de la commande"
              name="command_name"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="date_start">
              Date de début de commande
            </label>
            <input
              value={commandStartDate}
              onChange={(e) => setCommandStartDate(e.target.value)}
              className="form-control"
              name="date_start"
              placeholder="DD/MM/YYY"
              type="date"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="amount">
              Montant de la commande
            </label>
            <input
              value={commandAmount}
              onChange={(e) => setCommandAmount(e.target.value)}
              className="form-control"
              name="amount"
              placeholder="Veuillez entrer le montant de la commande"
              type="number"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="command_name">
              Numéro de contrat
            </label>
            <input
              value={contractName}
              onChange={(e) => setContractName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Veuillez entrer le numéro de contrat"
              name="command_name"
            />
          </div>
          <div className="mx-5 my-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary my-2"
            >
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCommand;
