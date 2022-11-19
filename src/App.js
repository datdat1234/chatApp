import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { Login } from "./components/login";
import { Chat } from "./components/chat";
export const AppContext = React.createContext();

function App() {

  return (
    <AppContext.Provider value={true}>
      <div id="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;