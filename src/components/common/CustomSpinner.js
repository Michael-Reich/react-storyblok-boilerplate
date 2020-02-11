import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const CustomSpinner = () => {
    return <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>;
};

export default CustomSpinner;

