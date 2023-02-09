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

    useEffect(() => {
        fetch('http://localhost:8080/api/playlist')
            .then(response => response.json())
            .then(data => {
                setPlaylist(data)
            })
            .catch(error => console.error(error));
    }, []);

    console.log(playlist)

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

  return (
    <ErrorBoundary>
        <div className="App">
            {playlist.length !== 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Исполнитель</th>
                        <th>Песня</th>
                        <th>Жанр</th>
                        <th>Год</th>
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
                </table>) : <p>LOADING...</p>}
            <Filter playlist={playlist} setPlaylist={setPlaylist}/>
            <RowsQuantity handleClickPerPage={handleClickPerPage}/>
            <Pagination
                rowsPerPage={rowsPerPage}
                totalRows={playlist.length}
                paginate={paginate}
                currPage={currPage}
            />
        </div>
    </ErrorBoundary>
  )
}

export default App
