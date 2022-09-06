import { React, useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import ContractsFinder from "../../apis/ContractsFinder";
import { ContractsContext } from "../../context/ContractsContext";
import {
  AiTwotoneEdit,
  AiFillDelete,
  AiOutlineFileAdd,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import "../../css/Table.css";
import DeleteConfirmation from "../Shared/DeleteConfirmation";

const ContractsList = (props) => {
  const { contracts, setContracts } = useContext(ContractsContext);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ContractsFinder.get("/");
        setContracts(response.data.data.contracts);
        console.log(response.data.data.contracts);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/contrats/${id}/update`);
  };

  const handleContractSelect = (id) => {
    navigate(`/contrats/${id}`);
  };
  // Set up some additional local state
  const [id, setId] = useState();
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [Message, setMessage] = useState(null);

  //Modal functions
  const showDeleteModal = (id) => {
    setId(id);
    setMessage(null);
    setDeleteMessage(
      `Etes vous sûr de vouloir supprimer le contrat : '${
        contracts.find((x) => x.contract_id === id).contract_name
      }'?`
    );

    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = async (id) => {
    try {
      const response = await ContractsFinder.delete(`/${id}`);
      setMessage(
        `Le contrat '${
          contracts.find((x) => x.contract_id === id).contract_name
        }' a été supprimé.`
      );
      setContracts(
        contracts.filter((contract) => {
          return contract.contract_id !== id;
        })
      );
    } catch (error) {
      console.log(error)
    };
    setDisplayConfirmationModal(false);
  };

  return (
    <div className="mx-5">
      <h1 className="text-center p-3">Liste des contrats</h1>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <Link to={"./create"}>
                <h1>
                  <AiOutlineFileAdd />
                </h1>
              </Link>
            </th>
            <th scope="col" style={{ verticalAlign: "middle" }}>
              Numéro de contrat
            </th>
            <th scope="col">Description</th>
            <th scope="col">Date de notification</th>
            <th scope="col">Taux réalisation monétaire</th>
            <th scope="col">Taux réalisation temporaire</th>
            <th scope="col">Situation</th>
            <th scope="col">Modifier</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {contracts &&
            contracts.map((contract) => {
              return (
                <tr
                  onDoubleClick={() =>
                    handleContractSelect(contract.contract_id)
                  }
                  key={contract.contract_id}
                >
                  <td>
                    <button
                      onClick={(e) =>
                        handleContractSelect(contract.contract_id)
                      }
                      className="btn"
                    >
                      <h2>
                        <AiOutlineInfoCircle />
                      </h2>
                    </button>
                  </td>
                  <td>{contract.contract_name}</td>
                  <td>{contract.contract_description}</td>
                  <td>
                    {contract.contract_notification_date.substring(0, 10)}
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td>{contract.contract_situation}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, contract.contract_id)}
                      className="btn btn-warning"
                    >
                      <AiTwotoneEdit />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => showDeleteModal(contract.contract_id)}
                      className="btn btn-danger"
                    >
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        id={id}
        message={deleteMessage}
      />
    </div>
  );
};

export default ContractsList;
