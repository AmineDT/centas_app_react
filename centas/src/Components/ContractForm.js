import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const ContractForm = (props) => {
const validationSchema = Yup.object().shape({
	contract_name: Yup.string().required("Veuillez entrer le nom du contrat"),
	contract_date: Yup.date().required("Veuillez entrer une date")
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="contract_name" type="text"
				className="form-control" />
			<ErrorMessage
			name="contract_name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="contract_date" type="date"
				className="form-control" />
			<ErrorMessage
			name="contract_date"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default ContractForm;
