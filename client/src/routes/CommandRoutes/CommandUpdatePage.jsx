import React from "react";
import UpdateCommand from "../../components/CommandComponents/UpdateCommand";
import Sidebar from "../../components/Sidebar";
import NavBar from "../../components/NavBar";

function CommandUpdatePage() {
  return (
    <div id="outer-container" style={{height: "100%",position: "absolute",left: "0",width: "100%", overflow: "hidden"}}>
      <Sidebar />
      <main id="page-wrap">
        <NavBar />
        <UpdateCommand />
      </main>
    </div>
      

  );
}

export default CommandUpdatePage;
