import React from "react";
import { useContext } from "react";
import { useState } from "react";
import ContractsFinder from "../../apis/ContractsFinder";
import { ContractsContext } from "../../context/ContractsContext";
import { useNavigate } from "react-router-dom";


const AddContract = () => {
  let navigate = useNavigate();
  const { addContracts } = useContext(ContractsContext);
  const [contractName, setContractName] = useState("");
  const [contractStartDate, setContractStartDate] = useState("");
  const [contractDescription, setcontractDescription] = useState("");
  const [contractAmount, setContractAmount] = useState("");
  const [contractNotificationDate, setContractNotificationDate] = useState("");
  const [provisionalBond, setProvisionalBond] = useState("");
  const [holdback, setHoldback] = useState("");


  // Function associated to the "add" button
  const handleSubmit = async (e) => {
    e.preventDefault();   //Prevent the submit button from submiting a form
    try {
      const response = await ContractsFinder.post("/", {
        contract_name: contractName,
        contract_description: contractDescription,
        contract_start_date: contractStartDate,
        contract_amount: contractAmount,
        contract_notification_date: contractNotificationDate,
        provisional_bond: provisionalBond,
        holdback: holdback,
      });
      addContracts(response.data.data.contract);
      console.log(response);
      navigate("/contrats");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-3 mx-5">
      <h1 style={{textAlign: "center"}}>Création de contrat</h1>
      <form>
        <div className="form-group">
          <div className="col">
            <label className="pr-2" htmlFor="contract_name">
              Numéro de contrat
            </label>
            <input
              value={contractName}
              onChange={(e) => setContractName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Veuillez entrer le numéro de contrat"
              name="contract_name"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="contract_desc">
              Description du contrat
            </label>
            <input
              value={contractDescription}
              onChange={(e) => setcontractDescription(e.target.value)}
              type="textarea"
              className="form-control"
              placeholder="Veuillez entrer la description du contrat"
              name="contract_desc"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="date_start">
              Date de début de contrat
            </label>
            <input
              value={contractStartDate}
              onChange={(e) => setContractStartDate(e.target.value)}
              className="form-control"
              name="date_start"
              placeholder="DD/MM/YYY"
              type="date"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="amount">
              Montant du contrat
            </label>
            <input
              value={contractAmount}
              onChange={(e) => setContractAmount(e.target.value)}
              className="form-control"
              name="amount"
              placeholder="Veuillez entrer le montant du contrat"
              type="number"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="date_notif">
              Date de notification
            </label>
            <input
              value={contractNotificationDate}
              onChange={(e) => setContractNotificationDate(e.target.value)}
              className="form-control"
              name="date_notif"
              placeholder="DD/MM/YYY"
              type="date"
            />
          </div>

          <div className="col">
            <label className="pr-2" htmlFor="provisional_bond">
              Caution provisoire
            </label>
            <input
              value={provisionalBond}
              onChange={(e) => setProvisionalBond(e.target.value)}
              className="form-control"
              name="provisional_bond"
              placeholder="Veuillez entrer le montant de la caution"
              type="number"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="holdback">
              Retenue de garantie
            </label>
            <input
              value={holdback}
              onChange={(e) => setHoldback(e.target.value)}
              className="form-control"
              name="holdback"
              placeholder="Veuillez entrer le montant de la retenue de garantie"
              type="number"
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

export default AddContract;
