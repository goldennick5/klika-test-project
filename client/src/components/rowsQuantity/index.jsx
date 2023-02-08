import React from 'react';

const RowsQuantity = ({handleClickPerPage}) => {
    return (
        <div>
            <button onClick={() => handleClickPerPage(10)}>10</button>
            <button onClick={() => handleClickPerPage(25)}>25</button>
            <button onClick={() => handleClickPerPage(50)}>50</button>
            <button onClick={() => handleClickPerPage(100)}>100</button>
        </div>
    );
};

export default RowsQuantity;