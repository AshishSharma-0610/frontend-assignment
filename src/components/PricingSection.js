import React, { useState, useEffect } from 'react';
import '../styles/PricingSection.css';
import { FaCalculator, FaCreditCard } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import PricingTable from './PricingTable';

const PricingSection = () => {
    const [isAnnual, setIsAnnual] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : true;
    });

    useEffect(() => {
        document.body.classList.toggle('light-mode', !isDarkMode);
        localStorage.setItem('theme', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prev => !prev);

    const pricingData = [
        { api: 'OpenAI', model: 'GPT-3.5', monthlyPrice: '$0.002', annualPrice: '$0.0018' },
        { api: 'OpenAI', model: 'GPT-4', monthlyPrice: '$0.03', annualPrice: '$0.027' },
        { api: 'Together AI', model: 'Llama-2-70b', monthlyPrice: '$0.0008', annualPrice: '$0.00072' },
        { api: 'Together AI', model: 'Llama-2-13b', monthlyPrice: '$0.0006', annualPrice: '$0.00054' },
    ];

    return (
        <div className="pricing-section">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <div className="content-box">
                <h2>API Pricing</h2>
                <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>

                <div className="pricing-toggle" role="group" aria-label="Pricing period">
                    <button
                        className={!isAnnual ? 'active' : ''}
                        onClick={() => setIsAnnual(false)}
                        aria-pressed={!isAnnual}
                    >
                        Monthly
                    </button>
                    <button
                        className={isAnnual ? 'active' : ''}
                        onClick={() => setIsAnnual(true)}
                        aria-pressed={isAnnual}
                    >
                        Annual (10% off)
                    </button>
                </div>

                <PricingTable pricingData={pricingData} isAnnual={isAnnual} />

                <h3><FaCalculator aria-hidden="true" /> Token Estimation</h3>
                <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>

                <h3><FaCreditCard aria-hidden="true" /> Billing</h3>
                <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
            </div>
        </div>
    );
};

export default PricingSection;