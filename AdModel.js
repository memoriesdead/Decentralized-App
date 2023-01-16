import React, { useState } from 'react';

const AdModel = () => {
  const [budget, setBudget] = useState(0);
  const [targetAudience, setTargetAudience] = useState("");
  const [platform, setPlatform] = useState("");

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  }

  const handleTargetAudienceChange = (e) => {
    setTargetAudience(e.target.value);
  }

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  }

  const handleOptimize = () => {
    // perform ad optimization logic here
    alert(`Ads optimized for budget $${budget}, target audience ${targetAudience} on ${platform}`);
  }

  return (
    <div>
      <h1>Ad Model</h1>
      <div className="ad-model-form">
        <label>
          Budget:
          <input type="number" value={budget} onChange={handleBudgetChange} />
        </label>
        <label>
          Target Audience:
          <input type="text" value={targetAudience} onChange={handleTargetAudienceChange} />
        </label>
        <label>
          Platform:
          <select value={platform} onChange={handlePlatformChange}>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
          </select>
        </label>
        <button onClick={handleOptimize}>Optimize</button>
      </div>     </div>
  );
}

export default AdModel;

