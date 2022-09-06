import React from "react";
import CommandsList from "../../components/CommandComponents/CommandsList";
import Sidebar from "../../components/Shared/Sidebar";
import NavBar from "../../components/Shared/NavBar";

function CommandListPage() {
  return (
    <div id="outer-container" style={{height: "100%",position: "absolute",left: "0",width: "100%", overflow: "hidden"}}>
      <Sidebar />
      <main id="page-wrap">
        <NavBar />
        <CommandsList />
      </main>
    </div>
  );
}

export default CommandListPage;