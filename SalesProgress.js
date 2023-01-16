import React, { useState } from 'react';

const SalesProgress = () => {
const [callsMade, setCallsMade] = useState(0);
const [interested, setInterested] = useState(0);
const [notInterested, setNotInterested] = useState(0);
const [escalated, setEscalated] = useState(0);

const handleCallsMadeChange = (e) => {
setCallsMade(e.target.value);
}

const handleInterestedChange = (e) => {
setInterested(e.target.value);
}

const handleNotInterestedChange = (e) => {
setNotInterested(e.target.value);
}

const handleEscalatedChange = (e) => {
setEscalated(e.target.value);
}

return (
<div>
<h1>Sales Progress</h1>
<div className="sales-form">
<label>
Calls Made:
<input type="number" value={callsMade} onChange={handleCallsMadeChange} />
</label>
<label>
Interested:
<input type="number" value={interested} onChange={handleInterestedChange} />
</label>
<label>
Not Interested:
<input type="number" value={notInterested} onChange={handleNotInterestedChange} />
</label>
<label>
Escalated:
<input type="number" value={escalated} onChange={handleEscalatedChange} />
</label>
</div>
</div>
);
}

export default SalesProgress;