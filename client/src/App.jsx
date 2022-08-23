import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContractListPage from "./routes/ContractRoutes/ContractListPage";
import ContractDetailsPage from "./routes/ContractRoutes/ContractDetailsPage";
import ContractUpdatePage from "./routes/ContractRoutes/ContractUpdatePage";
import ContractCreatePage from "./routes/ContractRoutes/ContractCreatePage";
import CommandListPage from "./routes/CommandRoutes/CommandListPage";
import CommandCreatePage from "./routes/CommandRoutes/CommandCreatePage";
import CommandUpdatePage from "./routes/CommandRoutes/CommandUpdatePage";
import CommandDetailsPage from "./routes/CommandRoutes/CommandDetailsPage";
import { ContractsContextProvider } from "./context/ContractsContext";
import { CommandsContextProvider } from "./context/CommandsContext";

const App = () => {
  return (
    <ContractsContextProvider>
      <CommandsContextProvider>
        <div className="container-fluid ml-0 mr-0 pl-0 pr-0">
          <BrowserRouter>
            <Routes>
              {/* -------------------------------------Contracts routes------------------------------------------ */}

              <Route exact path="/" element={<ContractListPage />} />
              <Route exact path="/contrats/" element={<ContractListPage />} />
              <Route
                exact
                path="/contrats/:id"
                element={<ContractDetailsPage />}
              />
              <Route
                exact
                path="/contrats/create"
                element={<ContractCreatePage />}
              />
              <Route
                exact
                path="/contrats/:id/update"
                element={<ContractUpdatePage />}
              />

              {/* -------------------------------------Commands routes------------------------------------------ */}

              <Route exact path="/commandes/" element={<CommandListPage />} />
              <Route
                exact
                path="/commandes/create"
                element={<CommandCreatePage />}
              />
              <Route exact path="/commandes/:id/update" element={<CommandUpdatePage />} />
              <Route
                exact
                path="/commandes/:id"
                element={<CommandDetailsPage />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </CommandsContextProvider>
    </ContractsContextProvider>
  );
};

export default App;
