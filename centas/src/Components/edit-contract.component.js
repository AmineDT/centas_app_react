// EditContract Component for update contract data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import ContractForm from "./ContractForm";

// EditContract Component
const EditContract = (props) => {
const [formValues, setFormValues] = useState({
	contract_name: "",
	contract_date: "",
});
	
//onSubmit handler
const onSubmit = (contractObject) => {
	axios
	.put(
		"http://localhost:3000/contrats/edition-contrat/" +
		props.match.params.id,
		contractObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Contract édité avec succes");
		props.history.push("/contract-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Une erreur est survenue"));
};

// Load data from server and reinitialize contract form
useEffect(() => {
	axios
	.get(
		"http://localhost:3000/contrats/edition-contrat/"
		+ props.match.params.id
	)
	.then((res) => {
		const { contract_name, contract_date } = res.data;
		setFormValues({ contract_name, contract_date });
	})
	.catch((err) => console.log(err));
}, []);

// Return contract form
return (
	<ContractForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Edition contrat
	</ContractForm>
);
};

// Export EditContract Component
export default EditContract;
