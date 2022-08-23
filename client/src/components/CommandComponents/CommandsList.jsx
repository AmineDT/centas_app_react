import { React, useEffect, useContext } from "react";
import { useNavigate, Link} from "react-router-dom";
import CommandsFinder from "../../apis/CommandsFinder";
import { CommandsContext } from "../../context/CommandsContext";

const CommandsList = (props) => {
  const { commands, setCommands } = useContext(CommandsContext);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CommandsFinder.get("/");
        setCommands(response.data.data.commands);
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
      const response = await CommandsFinder.delete(`/${id}`);
      setCommands(
        commands.filter((command) => {
          return command.command_id !== id;
        })
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/commandes/${id}/update`);
  };

  const handleCommandSelect = (id) => {
    navigate(`/commandes/${id}`);
  }

  return (
    <div className="mx-5">
      <h1 className="text-center p-3">Liste des commandes</h1>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
          <th scope="col">
              <Link to={"./create"}><h1>+</h1></Link>
            </th>
            <th scope="col">Numéro de la commande</th>
            <th scope="col">Date de début de la commande</th>
            <th scope="col">Montant de la commande</th>
            <th scope="col">Contrat associé</th>
            <th scope="col">Modifier</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {commands &&
            commands.map((command) => {
              return (
                <tr onDoubleClick={ () => handleCommandSelect(command.command_id) } key={command.command_id}>
                  <td>{command.command_id}</td>
                  <td>{command.command_number}</td>
                  <td>{command.command_start_date.substring(0, 10)}</td>
                  <td>{command.command_amount} Dhs</td>
                  <td>{command.contract_name}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, command.command_id)}
                      className="btn btn-warning"
                    >
                      Modifier
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, command.command_id)}
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

export default CommandsList;
