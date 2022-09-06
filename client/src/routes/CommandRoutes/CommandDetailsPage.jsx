import React, { useEffect, useContext } from "react";
import Sidebar from "../../components/Shared/Sidebar";
import NavBar from "../../components/Shared/NavBar";
import { CommandsContext } from "../../context/CommandsContext";
import CommandsFinder from "../../apis/CommandsFinder";
import { useParams } from "react-router-dom";

const CommandDetailsPage = () => {
  const { id } = useParams();
  const { selectedCommand, setSelectedCommand } =
    useContext(CommandsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CommandsFinder.get(`/${id}`);
        setSelectedCommand(response.data.data.command);
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
        <div style={{paddingRight: "20%", paddingLeft: "20%", paddingTop: "5%", paddingBottom: "3%"}}>
          <h1 style={{textAlign: "center", paddingBottom: "3%"}}>Détails</h1>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">
                  <h3>Détails de la commande</h3>
                </th>
                <th scope="col">
                  <h3>
                    N°&nbsp;
                    {selectedCommand && selectedCommand.command_number}
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><h5>Numéro de commande :</h5></td>
                <td>{selectedCommand && selectedCommand.command_number}</td>
              </tr>
              <tr>
                <td><h5>Date de début de commande :</h5></td>
                <td>
                  {selectedCommand &&
                    selectedCommand.command_start_date.substring(0, 10)}
                </td>
              </tr>
              <tr>
                <td><h5>Montant de la commande :</h5></td>
                <td>
                  {selectedCommand &&
                    selectedCommand.command_amount} Dhs
                </td>
              </tr>
              <tr>
                <td><h5>Contrat associé :</h5></td>
                <td>
                  {selectedCommand &&
                    selectedCommand.contract_name}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default CommandDetailsPage;
