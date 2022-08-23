import React from "react";
import AddCommand from "../../components/CommandComponents/AddCommand";
import Sidebar from "../../components/Sidebar";
import NavBar from "../../components/NavBar";

function CommandCreatePage() {
  return (
    <div id="outer-container" style={{height: "100%",position: "absolute",left: "0",width: "100%", overflow: "hidden"}}>
      <Sidebar />
      <main id="page-wrap">
        <NavBar />
        <AddCommand />
      </main>
    </div>
      

  );
}

export default CommandCreatePage;