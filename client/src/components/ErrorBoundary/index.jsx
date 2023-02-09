import React, {useState} from 'react';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return <h1>Something went wrong. Please try again later.</h1>;
    }

    try {
        return children;
    } catch (error) {
        setHasError(true);
    }
};

export default ErrorBoundary;