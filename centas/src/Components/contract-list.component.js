import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ContractTableRow from "./ContractTableRow";

const ContractList = () => {
const [contracts, setContracts] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:3000/contrats/")
	.then(({ data }) => {
		setContracts(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return contracts.map((res, i) => {
	return <ContractTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Nom contrat</th>
			<th>Date contrat</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ContractList;
