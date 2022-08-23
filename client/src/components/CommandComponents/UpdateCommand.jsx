import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommandsFinder from "../../apis/CommandsFinder";

function UpdateCommand(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [commandNumber, setCommandNumber] = useState("");
  const [commandStartDate, setCommandStartDate] = useState("");
  const [commandAmount, setCommandAmount] = useState("");
  const [contractName, setContractName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CommandsFinder.get(`/${id}`);
        console.log(response.data.data);
        setCommandNumber(response.data.data.command.command_number);
        setCommandStartDate(
          response.data.data.command.command_start_date.substring(0, 10)
        );
        setCommandAmount(response.data.data.command.command_amount);
        setContractName(response.data.data.command.contract_name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent the submit button from submiting a form
    try {
      // eslint-disable-next-line no-unused-vars
      const updatedCommand = await CommandsFinder.put(`/${id}`, {
        command_number: commandNumber,
        command_start_date: commandStartDate,
        command_amount: commandAmount,
        contract_name: contractName,
      });
    } catch (error) {
      console.log(error);
    }

    navigate("/commandes");
  };

  return (
    <div className="my-3 mx-5">
      <h1 style={{textAlign: "center"}}>Modification de commande</h1>
      <form>
        <div className="form-group">
          <div className="col">
            <label className="pr-2" htmlFor="command_number">
              Numéro de commande
            </label>
            <input
              value={commandNumber}
              onChange={(e) => setCommandNumber(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Veuillez entrer le numéro de commande"
              name="command_number"
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
            <label className="pr-2" htmlFor="amount">
              Contrat associé
            </label>
          <input
              value={contractName}
              onChange={(e) => setContractName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Veuillez entrer le numéro de contrat"
              name="command_number"
            />
            </div>
          <div className="mx-5 my-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary my-2"
            >
              Modifier
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateCommand;
