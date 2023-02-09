import React, { useState, useEffect } from "react";
import './index.css';

const Filter = ({ playlist, setPlaylist }) => {
    const [performer, setPerformer] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");

    const performers = Array.from(new Set(playlist.map(track => track.performer)));
    const genres = Array.from(new Set(playlist.map(track => track.genre)));
    const years = Array.from(new Set(playlist.map(track => track.year)));

    useEffect(() => {
        fetchPlaylistData();
    }, [performer, genre, year]);

    const fetchPlaylistData = () => {
        fetch(`http://localhost:8080/api/playlist-filter/?performer=${performer}&genre=${genre}&year=${year}`)
            .then(res => res.json())
            .then(data => {setPlaylist(data.data)})
            .catch(error => console.error(error));
    };

    return (
        <div className="filter-container-two">
            <h3>Исполнитель</h3>
            <select
                onChange={e => setPerformer(e.target.value)}
            >
                <option value="">Все</option>
                {performers.map(p => (
                    <option key={p} value={p}>
                        {p}
                    </option>
                ))}
            </select>
            <h3>Жанр</h3>
            <select
                onChange={e => setGenre(e.target.value)}
            >
                <option value="">Все</option>
                {genres.map(g => (
                    <option key={g} value={g}>
                        {g}
                    </option>
                ))}
            </select>
            <h3>Год</h3>
            <select
                onChange={e => setYear(e.target.value)}
            >
                <option value="">Все</option>
                {years.map(y => (
                    <option key={y} value={y}>
                        {y}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;