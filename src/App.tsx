import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PropsTest from "./components/PropsTest";
import UseStateEx from "./components/UseStateEx";
import EnumsEx from "./components/EnumsEx";
import DataGrid from "./components/DataGrid";
import AutocompleteInput from "./MuiSandbox";

export interface User {
  id: number
  name: string
  age: number
}


function App() {

  const users = [
    { id: 1, name: "John", age: 55 },
    { id: 2, name: "Mitchell", age: 23 },
    { id: 3, name: "Mike", age: 50 }
  ]

  const orders = [
    { id: 1, quantity: 5, amount: 75 },
    { id: 2, quantity: 2, amount: 20 },
    { id: 3, quantity: 1, amount: 40 }
  ]
  
  return (
    <div>
      
        <PropsTest
          headerText="Welcome to Nick's Lab"
          extraText="This is my TS introduction"
        />
        <UseStateEx />
        <EnumsEx/>
        <DataGrid items={users}/>

      <br/>

      <DataGrid items={orders}/>

      <AutocompleteInput />
  
  
    </div>
  );
}

export default App;

// headerText="Welcome to Nick's Lab" extraText='This is my ts introduction'
