import {useEffect, useState} from 'react';
import Pagination from "./components/Pagination/index.jsx";
import RowsQuantity from "./components/RowsQuantity/index.jsx";
import Filter from "./components/Filter/index.jsx";
import ErrorBoundary from "./components/ErrorBoundary/index.jsx";
import './App.css';

function App() {
    const [playlist, setPlaylist] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [sortBy, setSortBy] = useState('performer');
    const [order, setOrder] = useState('desc');

    const baseUrlForPlaylist = process.env.NODE_ENV === "production" ? "/api/playlist" : "http://localhost:8080/api/playlist";
    const baseUrlForPlaylistSort = process.env.NODE_ENV === "production" ? `/api/playlist-sort/?sortBy=${sortBy}&order=${order}`
                                                                         : `http://localhost:8080/api/playlist-sort/?sortBy=${sortBy}&order=${order}`;

    useEffect(() => {
        fetch(baseUrlForPlaylist, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setPlaylist(data)
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch(baseUrlForPlaylistSort, { method: 'GET' })
            .then(response => response.json())
            .then(data => setPlaylist(data.rows));
    }, [sortBy, order]);

    const indexOfLastRow = currPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = playlist.slice(indexOfFirstRow, indexOfLastRow);

    function paginate(pageNum) {
        setCurrPage(pageNum);
    }

    function handleClickPerPage(num) {
        setRowsPerPage(num);
        setCurrPage(1);
    }

    const handleSort = (sortColumn, e) => {
        e.preventDefault();
        let newOrder = 'asc';
        if (sortBy === sortColumn && order === 'asc') {
            newOrder = 'desc';
        }
        setSortBy(sortColumn);
        setOrder(newOrder);
    };

    return (
        <ErrorBoundary>
            <div className="App">
                <div>
                    <h2 className="title">Плейлист</h2>
                    {playlist.length !== 0 ? (
                        <table>
                            <thead>
                            <tr>
                                <th>
                                <span onClick={e => handleSort('performer', e)}>
                                    Исполнитель
                                    {sortBy === 'performer' && (
                                        <span>
                                            {order === 'asc' ? ' ▲' : ' ▼'}
                                        </span>
                                    )}
                                </span>
                                </th>
                                <th>
                                <span onClick={e => handleSort('song', e)}>
                                    Песня
                                    {sortBy === 'song' && (
                                        <span>
                                            {order === 'asc' ? ' ▲' : ' ▼'}
                                        </span>
                                    )}
                                </span>
                                </th>
                                <th>
                                <span onClick={e => handleSort('genre', e)}>
                                    Жанр
                                    {sortBy === 'genre' && (
                                        <span>
                                            {order === 'asc' ? ' ▲' : ' ▼'}
                                        </span>
                                    )}
                                </span>
                                </th>
                                <th>
                                <span onClick={e => handleSort('year', e)}>
                                    Год
                                    {sortBy === 'year' && (
                                        <span>
                                            {order === 'asc' ? ' ▲' : ' ▼'}
                                        </span>
                                    )}
                                </span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                currentRows.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.performer}</td>
                                        <td>{item.song}</td>
                                        <td>{item.genre}</td>
                                        <td>{item.year}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>) : <p>LOADING...</p>
                    }
                    <div className="pagination-container">
                        <RowsQuantity handleClickPerPage={handleClickPerPage} rowsPerPage={rowsPerPage}/>
                        <Pagination
                            rowsPerPage={rowsPerPage}
                            totalRows={playlist.length}
                            paginate={paginate}
                            currPage={currPage}
                            setCurrPage={setCurrPage}
                        />
                    </div>
                </div>
                <div className="filter-container">
                    <h2 className="title">Фильтр</h2>
                    <Filter playlist={playlist} setPlaylist={setPlaylist}/>
                </div>
            </div>
        </ErrorBoundary>
    )
}

export default App
