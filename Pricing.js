import React, { useState } from 'react';

const Pricing = () => {
const [price, setPrice] = useState(0);

const handlePriceChange = (e) => {
setPrice(e.target.value);
}

const handleSubmit = () => {
    // perform pricing logic here
    alert(`Price set to ${price}`);
  }
  
return (
<div>
<h1>Pricing</h1>
<div className="pricing-form">
<label>
Price:
<input type="number" value={price} onChange={handlePriceChange} />
</label>
<button onClick={handleSubmit}>Submit</button>
</div>
</div>
);
}

export default Pricing;