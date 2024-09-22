import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Main searchTerm={searchTerm} />
    </div>
  );
}

export default App;
