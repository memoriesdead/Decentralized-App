import React, { useState } from 'react';

const TransferAgent = () => {
  const [shareholder, setShareholder] = useState("");
  const [shares, setShares] = useState(0);

  const handleShareholderChange = (e) => {
    setShareholder(e.target.value);
  }

  const handleSharesChange = (e) => {
    setShares(e.target.value);
  }

  const handleTransfer = () => {
    // perform transfer logic here
    alert(`${shares} shares transferred to ${shareholder}`);
  }

  return (
    <div>
      <h1>Transfer Agent</h1>
      <div className="transfer-form">
        <label>
          Shareholder:
          <input type="text" value={shareholder} onChange={handleShareholderChange} />
        </label>
        <label>
          Shares:
          <input type="number" value={shares} onChange={handleSharesChange} />
        </label>
        <button onClick={handleTransfer}>Transfer</button>
      </div>
    </div>
  );
}

export default TransferAgent;
