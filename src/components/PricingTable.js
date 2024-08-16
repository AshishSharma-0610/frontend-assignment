import React from 'react';

const PricingTable = ({ pricingData, isAnnual }) => {
    return (
        <div className="pricing-table">
            <table>
                <thead>
                    <tr>
                        <th>API</th>
                        <th>MODEL</th>
                        <th>PRICE PER 1K TOKENS</th>
                    </tr>
                </thead>
                <tbody>
                    {pricingData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.api}</td>
                            <td>{item.model}</td>
                            <td>{isAnnual ? item.annualPrice : item.monthlyPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PricingTable;