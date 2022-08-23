import React from "react";
import ContractsList from "../../components/ContractComponents/ContractsList";
import Sidebar from "../../components/Sidebar";
import NavBar from "../../components/NavBar";

function ContractListPage() {
  return (
    <div id="outer-container" style={{height: "100%",position: "absolute",left: "0",width: "100%", overflow: "hidden"}}>
      <Sidebar />
      <main id="page-wrap">
        <NavBar />
        <ContractsList />
      </main>
    </div>
  );
}

export default ContractListPage;
