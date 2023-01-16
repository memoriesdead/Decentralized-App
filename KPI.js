import React, { useState, useEffect } from 'react';

const KPI = () => {
  const [kpiData, setKpiData] = useState({});

  useEffect(() => {
    fetchKpiData();
  }, []);

  const fetchKpiData = async () => {
    try {
      const res = await fetch('https://your-api-endpoint.com/kpi');
      const data = await res.json();
      setKpiData(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Key Performance Indicators</h1>
      <div className="kpi-data">
        <div>Signups: {kpiData.signups}</div>
        <div>Conversions: {kpiData.conversions}</div>
        <div>Revenue: {kpiData.revenue}</div>
      </div>
    </div>
  );
}

export default KPI;
