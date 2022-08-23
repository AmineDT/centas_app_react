import { React, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import ContractsFinder from "../../apis/ContractsFinder";
import { ContractsContext } from "../../context/ContractsContext";

const ContractsList = (props) => {
  const { contracts, setContracts } = useContext(ContractsContext);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ContractsFinder.get("/");
        setContracts(response.data.data.contracts);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await ContractsFinder.delete(`/${id}`);
      setContracts(
        contracts.filter((contract) => {
          return contract.contract_id !== id;
        })
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/contrats/${id}/update`);
  };

  const handleContractSelect = (id) => {
    navigate(`/contrats/${id}`);
  };

  return (
    <div className="mx-5">
      <h1 className="text-center p-3">Liste des contrats</h1>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <Link to={"./create"}><h1>+</h1></Link>
            </th>
            <th scope="col">Numéro de contrat</th>
            <th scope="col">Date de début de contrat</th>
            <th scope="col">Montant du contrat</th>
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
                  <td>{contract.contract_id}</td>
                  <td>{contract.contract_name}</td>
                  <td>{contract.contract_start_date.substring(0, 10)}</td>
                  <td>{contract.contract_amount} Dhs</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, contract.contract_id)}
                      className="btn btn-warning"
                    >
                      Modifier
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, contract.contract_id)}
                      className="btn btn-danger"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ContractsList;
