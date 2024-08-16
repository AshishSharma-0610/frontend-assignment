import React from 'react';
import '../styles/ThemeToggle.css';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            <div className="slider-track">
                <div className={`slider ${isDarkMode ? 'dark' : 'light'}`}>
                    {isDarkMode ? '🌙' : '☀️'}
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;