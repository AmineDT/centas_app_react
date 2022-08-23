import React from "react";
import UpdateContract from "../../components/ContractComponents/UpdateContract";
import Sidebar from "../../components/Sidebar";
import NavBar from "../../components/NavBar";

function ContractUpdatePage() {
  return (
    <div id="outer-container" style={{height: "100%",position: "absolute",left: "0",width: "100%", overflow: "hidden"}}>
      <Sidebar />
      <main id="page-wrap">
        <NavBar />
        <UpdateContract />
      </main>
    </div>
      

  );
}

export default ContractUpdatePage;
