import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Chat */}
      <Chat />
    </div>
  );
}

export default App;
