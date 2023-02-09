import React from 'react';
import './index.css';

const RowsQuantity = ({handleClickPerPage}) => {

    return (
        <div className="btn-container">
            <button onClick={() => handleClickPerPage(10)}>10</button>
            <button onClick={() => handleClickPerPage(25)}>25</button>
            <button onClick={() => handleClickPerPage(50)}>50</button>
            <button onClick={() => handleClickPerPage(100)}>100</button>
        </div>
    );
};

export default RowsQuantity;