import "./App.css";

import { React } from "react";
import Routing from "./Routing"
import {AuthProvider} from "./Auth"


function App() {
  

  return (
    <AuthProvider>
      <Routing/>
    </AuthProvider>
  );
}

export default App;
