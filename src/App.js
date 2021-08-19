import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          {/* Sidebar */}
          <Sidebar />

          {/* Chat */}
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
