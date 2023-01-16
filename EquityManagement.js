import React, { useState } from 'react';

const EquityManagement = () => {
  const [shareholder, setShareholder] = useState("");
  const [shares, setShares] = useState(0);

  const handleShareholderChange = (e) => {
    setShareholder(e.target.value);
  }

  const handleSharesChange = (e) => {
    setShares(e.target.value);
  }

  const handleAddShares = () => {
    // perform add shares logic here
    alert(`${shares} shares added to ${shareholder} `);
  }

  const handleRemoveShares = () => {
    // perform remove shares logic here
     
    alert(`${shares} shares removed from ${shareholder}`);
  }

  return (
    <div className="equity-management-container">
      <h1>Equity Management</h1>
      <div className="equity-management-form">
        <label>
          Shareholder:
          <input type="text" value={shareholder} onChange={handleShareholderChange} />
        </label>
        <label>
          Shares:
          <input type="number" value={shares} onChange={handleSharesChange} />
        </label>
        <div className="button-container">
          <button onClick={handleAddShares}>Add Shares</button>
          <button onClick={handleRemoveShares}>Remove Shares</button>
        </div>
      </div>
    </div>
  );
}

export default EquityManagement;
