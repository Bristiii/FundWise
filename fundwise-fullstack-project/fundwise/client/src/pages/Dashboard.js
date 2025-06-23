import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/portfolio', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPortfolio(res.data.portfolio);
    };
    fetchPortfolio();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Your Saved Mutual Funds</h2>
      <div className="max-w-2xl mx-auto bg-white shadow rounded p-4">
        {portfolio.length > 0 ? (
          portfolio.map((fund, i) => (
            <div key={i} className="mb-4 border-b pb-2">
              <p className="font-semibold">{fund.fundName}</p>
              <p>Units: {fund.units}</p>
              <p>NAV: ₹{fund.nav}</p>
              <p>Value: ₹{fund.currentValue}</p>
            </div>
          ))
        ) : (
          <p>No funds saved yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;