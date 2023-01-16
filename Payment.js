import React, { useState } from 'react';

const Payment = () => {
const [paymentMethod, setPaymentMethod] = useState("credit card");
const [amount, setAmount] = useState(0);
const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
}

const handleAmountChange = (e) => {
    setAmount(e.target.value);
}

const handleDeposit = () => {
    // perform deposit logic here
    alert(`Deposit of $${amount} made with ${paymentMethod}`);
}

const handleWithdrawal = () => {
    // perform withdrawal logic here
    alert(`Withdrawal of $${amount} made with ${paymentMethod}`);
}

return (
    <div>
        <h1>Payment On-Ramp/Off-Ramp</h1>
        <div className="payment-form">
            <label>
                Payment Method:
                <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                    <option value="credit card">Credit Card</option>
                    <option value="debit card">Debit Card</option>
                    <option value="bank transfer">Bank Transfer</option>
                </select>
            </label>
            <label>
                Amount:
                <input type="number" value={amount} onChange={handleAmountChange} />
            </label>
            <button onClick={handleDeposit}>Make Deposit</button>
            <button onClick={handleWithdrawal}>Make Withdrawal</button>
        </div>
    </div>
);
}

export default Payment;
