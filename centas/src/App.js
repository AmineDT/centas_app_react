// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateContract from
	"./Components/create-contract.component";
import EditContract from
	"./Components/edit-contract.component";
import ContractList from
	"./Components/contract-list.component";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/creation-contrat"}
				className="nav-link">
				Application Centas
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/creation-contrat"}
					className="nav-link">
					Créer contrat
				</Link>
				</Nav>

				<Nav>
				<Link to={"/liste-contrats"}
					className="nav-link">
					Liste des contrats
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
				<Route exact path="/"
					element={<CreateContract />} />
				<Route path="/creation-contrat"
					element={<CreateContract />} />
				<Route path="/edition-contrat/:id"
					element={<EditContract />} />
				<Route path="/liste-contrats"
					element={<ContractList />} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;

