import React, { useState } from 'react';

const SmartContract = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [contractName, setContractName] = useState("");
  const [contractABI, setContractABI] = useState("");

  const handleContractAddressChange = (e) => {
    setContractAddress(e.target.value);
  }
  
  const handleContractNameChange = (e) => {
    setContractName(e.target.value);
  }

  const handleContractABIChange = (e) => {
    setContractABI(e.target.value);
  }

  const handleDeploy = () => {
    // perform smart contract deployment logic here
    alert(`Smart contract ${contractName} deployed at address ${contractAddress}`);
  }

  return (
    <div>
      <h1>Smart Contract</h1>
      <div className="smart-contract-form">
        <label>
          Contract Address:
          <input type="text" value={contractAddress} onChange={handleContractAddressChange} />
        </label>
         <label>
          Contract Name:
          <input type="text" value={contractName} onChange={handleContractNameChange} />
        </label>
        <label>
          Contract ABI:
          <textarea value={contractABI} onChange={handleContractABIChange} />
        </label>
        <button onClick={handleDeploy} >Deploy</button>
      </div>
    </div>
  );
}

export default SmartContract;

