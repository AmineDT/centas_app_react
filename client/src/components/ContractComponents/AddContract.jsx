import React from "react";
import { useContext } from "react";
import { useState } from "react";
import ContractsFinder from "../../apis/ContractsFinder";
import { ContractsContext } from "../../context/ContractsContext";
import { useNavigate } from "react-router-dom";
import AddConfirmation from "../Shared/AddConfirmation";

const AddContract = () => {
  let navigate = useNavigate();
  const { addContracts } = useContext(ContractsContext);
  const [contractName, setContractName] = useState("");
  const [contractNotificationDate, setContractNotificationDate] = useState("");
  const [contractDescription, setcontractDescription] = useState("");
  const [contractAmount, setContractAmount] = useState("");
  const [contractProvisionalBond, setContractProvisionalBond] = useState("");
  const [contractHoldback, setContractHoldback] = useState("");
  const [contractDuration, setContractDuration] = useState({
    contract_duration_years: "1",
    contract_duration_months: "0",
  });
  const [contractDefinitiveBond, setContractDefinitiveBond] = useState("");
  const [
    contractDateReturnProvisionalBond,
    setContractDateReturnProvisionalBond,
  ] = useState("");
  const [contractDateCompletion, setContractDateCompletion] = useState("");
  const [contractDateClosing, setContractDateClosing] = useState("");
  const [contractSituation, setContractSituation] = useState("En cours");

  // Set up some additional local state
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [updateMessage, setUpdateMessage] = useState(null);
  const [Message, setMessage] = useState(null);

  //Modal functions
  const showAddModal = (e) => {
    e.preventDefault();
    setMessage(null);
    setUpdateMessage(
      `Etes vous sûr de vouloir ajouter le contrat : '${contractName}'?`
    );

    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitAdd = async () => {
    try {
      const response = await ContractsFinder.post("/", {
        contract_name: contractName,
        contract_description: contractDescription,
        contract_notification_date: contractNotificationDate,
        contract_amount: contractAmount,
        contract_provisional_bond: contractProvisionalBond,
        contract_holdback: contractHoldback,
        contract_duration: `${contractDuration.contract_duration_years} year ${contractDuration.contract_duration_months || 0} months`,
        contract_definitive_bond: contractDefinitiveBond,
        contract_date_return_provisional_bond: contractDateReturnProvisionalBond,
        contract_date_completion: contractDateCompletion,
        contract_date_closing: contractDateClosing,
        contract_situation: contractSituation
      });
      addContracts(response.data.data.contract);
      console.log(response);
      navigate("/contrats");
    } catch (error) {
      console.log(error);
    }
    setDisplayConfirmationModal(false);
    navigate("/contrats");
  };

  /* Function associated to the "add" button
  const handleSubmit = async (e) => {
    e.preventDefault(); //Prevent the submit button from submiting a form
    try {
      const response = await ContractsFinder.post("/", {
        contract_name: contractName,
        contract_description: contractDescription,
        contract_notification_date: contractNotificationDate,
        contract_amount: contractAmount,
        contract_provisional_bond: contractProvisionalBond,
        contract_holdback: contractHoldback,
        contract_duration: `${contractDuration.contract_duration_years} year ${contractDuration.contract_duration_months} months`,
        contract_definitive_bond: contractDefinitiveBond,
        contract_date_return_provisional_bond: contractDateReturnProvisionalBond,
        contract_date_completion: contractDateCompletion,
        contract_date_closing: contractDateClosing,
        contract_situation: contractSituation
      });
      addContracts(response.data.data.contract);
      console.log(response);
      navigate("/contrats");
    } catch (error) {
      console.log(error);
    }
  };*/
  return (
    <div className="my-3 mx-5">
      <h1 style={{ textAlign: "center" }}>Création de contrat</h1>
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
            <label className="pr-2" htmlFor="provisional_bond">
              Caution provisoire
            </label>
            <input
              value={contractProvisionalBond}
              onChange={(e) => setContractProvisionalBond(e.target.value)}
              className="form-control"
              name="provisional_bond"
              placeholder="Veuillez entrer le montant de la caution"
              type="number"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="holdback">
              Retenue de garantie en pourcentage
            </label>
            <input
              value={contractHoldback}
              onChange={(e) => setContractHoldback(e.target.value)}
              className="form-control"
              name="holdback"
              placeholder="Veuillez entrer le montant de la retenue de garantie"
              type="number"
            />
          </div>
          <div className="row">
            <div className="col" style={{ marginLeft: "1%" }}>
              <label className="pr-2" htmlFor="contract_duration_years">
                Durée de contrat en années
              </label>
              <input
                value={contractDuration.contract_duration_years}
                onChange={(e) =>
                  setContractDuration({ ...contractDuration, contract_duration_years: e.target.value })
                }
                type="number"
                className="form-control"
                placeholder="Durée de contrat en années"
              />
            </div>
            <div className="col" style={{ marginRight: "1%" }}>
              <label className="pr-2" htmlFor="contract_duration_months">
                Durée de contrat en mois
              </label>
              <input
                value={contractDuration.contract_duration_months}
                onChange={(e) =>
                  setContractDuration({ ...contractDuration, contract_duration_months: e.target.value })
                }
                type="number"
                class="form-control"
                placeholder="Durée de contrats en mois"
              />
            </div>
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="definitive_bond">
              Caution définitive
            </label>
            <input
              value={contractDefinitiveBond}
              onChange={(e) => setContractDefinitiveBond(e.target.value)}
              className="form-control"
              name="amount"
              placeholder="Veuillez entrer la caution définitive"
              type="number"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="date_bond_return">
              Date retour caution provisoire
            </label>
            <input
              value={contractDateReturnProvisionalBond}
              onChange={(e) =>
                setContractDateReturnProvisionalBond(e.target.value)
              }
              className="form-control"
              name="date_provisional_bond"
              placeholder="DD/MM/YYY"
              type="date"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="date_completion">
              Date d'achèvement
            </label>
            <input
              value={contractDateCompletion}
              onChange={(e) => setContractDateCompletion(e.target.value)}
              className="form-control"
              name="date_completion"
              placeholder="DD/MM/YYY"
              type="date"
            />
          </div>
          <div className="col">
            <label className="pr-2" htmlFor="date_closing">
              Date de clôturation
            </label>
            <input
              value={contractDateClosing}
              onChange={(e) => setContractDateClosing(e.target.value)}
              className="form-control"
              name="date_closing"
              placeholder="DD/MM/YYY"
              type="date"
            />
          </div>
          <div className="col" style={{paddingTop: "1%"}}>
            <label className="pr-2" htmlFor="contract_name">
              Situation du contrat
            </label>
            <select
            style={{width: "20%"}}
              value={contractSituation}
              onChange={(e) => setContractSituation(e.target.value)}
            >
              <option value="En cours">En cours</option>
              <option value="Achevé">Achevé</option>
              <option value="Clôturé">Clôturé</option>
              <option value="En arrêt">En arrêt</option>
            </select>
          </div>

          <div className="mx-5 my-4">
            <button
              onClick={(e) => showAddModal(e)}
              className="btn btn-primary my-2"
            >
              Ajouter
            </button>
          </div>
        </div>
      </form>
      <AddConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitAdd}
        hideModal={hideConfirmationModal}
        message={updateMessage}
      />
    </div>
  );
};

export default AddContract;
