import React from 'react';
import './index.css';
import left from '../../assets/left-arrow.png';
import right from '../../assets/right-arrow.png';

const Pagination = ({ rowsPerPage, totalRows, paginate, currPage, setCurrPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    function handleCurrPageToLeft(selected){
        setCurrPage(selected);
        if(currPage === 1){
            setCurrPage(pageNumbers.length)
        }
    }

    function handleCurrPageToRight(selected){
        setCurrPage(selected);
        if(currPage === pageNumbers.length){
            setCurrPage(1)
        }
    }

    return (
        <nav>
            <ul className="pagination">
                <span onClick={() => handleCurrPageToLeft(currPage-1)}>
                    <img src={left} alt="left"/>
                </span>
                {pageNumbers.map((number, index) => (
                    <li key={index} value={number} className={
                        number === currPage ? 'page-item active' : 'page-item'
                    }>
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <span onClick={() => handleCurrPageToRight(currPage+1)}>
                    <img src={right} alt="right"/>
                </span>
            </ul>
        </nav>
    )
};

export default Pagination;