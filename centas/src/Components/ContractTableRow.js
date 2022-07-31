import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ContractTableRow = (props) => {
const { _id, contract_name, contract_date } = props.obj;

const deleteContract = () => {
	axios
	.delete(
"http://localhost:3000/contrats/supprimer-contrat/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Contrat supprimé");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Une erreur est survenue"));
};

return (
	<tr>
	<td>{contract_name}</td>
	<td>{contract_date}</td>
	<td>
		<Link className="edit-link"
		to={"/edition-contrat/" + _id}>
		Editer
		</Link>
		<Button onClick={deleteContract}
		size="sm" variant="danger">
		Supprimer
		</Button>
	</td>
	</tr>
);
};

export default ContractTableRow;
