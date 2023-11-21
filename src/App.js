import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VarNav from "./components/Menu/VarNavbar";
import HorNav from "./components/Menu/HoriNavbar";
import "./index.scss";
import Chart from "./components/Card/chart.js";
import dashboard from "./img/dashboard.png";
import account from "./img/account.png";
import payroll from "./img/payroll.png";
import reports from "./img/reports.png";
import advisor from "./img/advisor.png";
import contacts from "./img/contacts.png";


function App() {
  const verticalNavItems = [
    ["Dashboard", dashboard],
    ["Account", account],
    ["Payroll", payroll],
    ["Reports", reports],
    ["Advisor", advisor],
    ["Contacts", contacts]
  ];
  const searchbar = <input type="text" placeholder="Search" />;

  return (
    
      <Router>
    <div>
      <HorNav searchbar={searchbar} />
      <div style={{ display: "flex" }}>
        <VarNav li={verticalNavItems} />
        <Routes >
        {verticalNavItems.map((item, index) => (
              <Route key={index} path={`/${item[0].toLowerCase()}`} element={<Chart />} />
            ))}
          </Routes >
      </div>
    </div>
    </Router>
  
  );
}


export default App;
