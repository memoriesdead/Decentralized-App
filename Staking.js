import React, { useState } from 'react';

const Staking = () => {
const [stakingAmount, setStakingAmount] = useState(0);
const [yieldAmount, setYieldAmount] = useState(0);
const [staked, setStaked] = useState(false);
const [total, setTotal] = useState(0);

const handleStakingAmountChange = (e) => {
setStakingAmount(e.target.value);
}

const handleYieldAmountChange = (e) => {
setYieldAmount(e.target.value);
}

const handleStake = () => {
// perform staking and yield calculation logic here
setTotal(stakingAmount + yieldAmount);
setStaked(true);
}

return (
<div>
<h1>Staking</h1>
<div className="staking-form">
<label>
Staking Amount:
<input type="number" value={stakingAmount} onChange={handleStakingAmountChange} />
</label>
<label>
Yield Amount:
<input type="number" value={yieldAmount} onChange={handleYieldAmountChange} />
</label>
<button onClick={handleStake}>Stake</button>
{staked && <div>Staked. Total staked and yield amount is {total}</div>}
</div>
</div>
);
}

export default Staking;