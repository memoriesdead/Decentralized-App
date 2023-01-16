import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import EquityManagement from './EquityManagement';
import TransferAgent from './TransferAgent';
import SmartContract from './SmartContract';
import Staking from './Staking';
import Payment from './Payment';
import './App.css'; // import your css file for styling

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Decentralized App</h1>
        </div>
        <div className="container">
          <SurveyForm />
          <EquityManagement />
          <TransferAgent />
          <SmartContract />
          <Staking />
          <Payment />
        </div>
        <footer>
          <p>Copyright © 2021 Decentralized App</p>
        </footer>
      </div>
    );
  }
}

export default App;
































/*
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import AdModel from './AdModel';
import EquityManagement from './EquityManagement';
import TransferAgent from './TransferAgent';
import SmartContract from './SmartContract';
import Staking from './Staking';
import Payment from './Payment';
import SalesProgress from './SalesProgress';
import KPI from './KPI';
import Pricing from './Pricing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SurveyForm />
        <AdModel />
        <EquityManagement />
        <TransferAgent />
        <SmartContract />
        <Staking />
        <Payment />
        <SalesProgress />
        <KPI />
        <Pricing />
      </div>
    );
  }
}

export default App;
*/ 