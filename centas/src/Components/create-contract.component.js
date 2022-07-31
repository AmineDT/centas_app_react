// CreateContract Component for add new contract

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ContractForm from "./ContractForm";

// CreateContract Component
const CreateContract = () => {
const [formValues, setFormValues] =
	useState({ contract_name: '', contract_date: ''})
// onSubmit handler
const onSubmit = contractObject => {
	axios.post(
'http://localhost:3000/contrats/creation-contrat',
	contractObject)
	.then(res => {
		if (res.status === 200)
		alert('Contrat crée')
		else
		Promise.reject()
	})
	.catch(err => alert('Une erreur est survenue'))
}
	
// Return contract form
return(
	<ContractForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Créer Contrat
	</ContractForm>
)
}

// Export CreateContract Component
export default CreateContract
