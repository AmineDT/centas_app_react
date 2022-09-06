import React, { useEffect, useContext } from "react";
import Sidebar from "../../components/Shared/Sidebar";
import NavBar from "../../components/Shared/NavBar";
import { ContractsContext } from "../../context/ContractsContext";
import ContractsFinder from "../../apis/ContractsFinder";
import { useParams } from "react-router-dom";

const ContractDetailsPage = () => {
  const { id } = useParams();
  const { selectedContract, setSelectedContract } =
    useContext(ContractsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ContractsFinder.get(`/${id}`);
        setSelectedContract(response.data.data.contract);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="outer-container"
      style={{
        height: "100%",
        position: "absolute",
        left: "0",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Sidebar />
      <main id="page-wrap">
        <NavBar />
        <div
          style={{
            paddingRight: "20%",
            paddingLeft: "20%",
            paddingTop: "5%",
            paddingBottom: "3%",
          }}
        >
          <h1 style={{ textAlign: "center", paddingBottom: "3%" }}>Détails</h1>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">
                  <h3>Détails du contrat</h3>
                </th>
                <th scope="col">
                  <h3>
                    N°&nbsp;
                    {selectedContract && selectedContract.contract_name}
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5>Numéro de contrat :</h5>
                </td>
                <td>{selectedContract && selectedContract.contract_name}</td>
              </tr>
              <tr>
                <td>
                  <h5>Description du contrat :</h5>
                </td>
                <td>
                  {selectedContract && selectedContract.contract_description? selectedContract.contract_description : "-"}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Situation du contrat :</h5>
                </td>
                <td>
                  {selectedContract && selectedContract.contract_situation? selectedContract.contract_situation : "-"}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Durée du contrat :</h5>
                </td>
                <td>
                  {selectedContract && selectedContract.contract_situation? ((selectedContract.contract_duration.years? selectedContract.contract_duration.years + " Années ": "") + (selectedContract.contract_duration.months? selectedContract.contract_duration.months + " mois": "")): "-"}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Date de notification :</h5>
                </td>
                <td>
                  {selectedContract &&
                    selectedContract.contract_notification_date? selectedContract.contract_notification_date.substring(
                      0,
                      10
                    ) : "-"}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Montant du contrat :</h5>
                </td>
                <td>
                  {selectedContract && selectedContract.contract_amount? selectedContract.contract_amount : "-"} Dhs
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Caution provisoire :</h5>
                </td>
                <td>
                  {selectedContract &&
                    selectedContract.contract_provisional_bond? selectedContract.contract_amount : "-"}{" "}
                  Dhs
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Dépôt de garantie :</h5>
                </td>
                <td>
                  {selectedContract && selectedContract.contract_holdback? selectedContract.contract_holdback: "-"}%
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Date d'achèvement :</h5>
                </td>
                <td>
                  {selectedContract &&
                    selectedContract.contract_date_completion? selectedContract.contract_date_completion.substring(0, 10) : "-"}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Date de clôturation :</h5>
                </td>
                <td>
                  {selectedContract &&
                    selectedContract.contract_date_closing? selectedContract.contract_date_closing.substring(0, 10) : "-"}
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Caution définitive :</h5>
                </td>
                <td>
                  {selectedContract &&
                    selectedContract.contract_definitive_bond? selectedContract.contract_definitive_bond : "-"}{" "}
                  Dhs
                </td>
              </tr>
              <tr>
                <td>
                  <h5>Date de retour de caution provisoire :</h5>
                </td>
                <td>
                  {selectedContract &&
                    selectedContract.contract_date_return_provisional_bond? selectedContract.contract_date_return_provisional_bond.substring(
                      0,
                      10
                    ) : "-"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ContractDetailsPage;
