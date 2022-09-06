import React from "react";
import AddContract from "../../components/ContractComponents/AddContract";
import Sidebar from "../../components/Shared/Sidebar";
import NavBar from "../../components/Shared/NavBar";

function ContractCreatePage() {
  return (
    <div id="outer-container" style={{height: "100%",position: "absolute",left: "0",width: "100%", overflow: "hidden"}}>
      <Sidebar />
      <main id="page-wrap">
        <NavBar />
        <AddContract />
      </main>
    </div>
      

  );
}

export default ContractCreatePage;