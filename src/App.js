import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { Login } from "./components/login";
export const AppContext = React.createContext();

function App() {

  return (
    <AppContext.Provider>
      <div id="App">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;