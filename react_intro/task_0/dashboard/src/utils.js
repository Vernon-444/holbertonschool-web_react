// Utils.js
import React from 'react';

// getFullYear, return current year
export const getFullYear = () => {
    return new Date().getFullYear();
    }

// getFooterCopy, return a string
export const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'Holberton School';
    } else {
        return 'Holberton School main dashboard';
    }
}

// getLatestNotification, return a string
export const getLatestNotification = () => {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}
