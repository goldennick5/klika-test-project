const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Toxa2002",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

class PlaylistController {
    async getPlaylist(req, res) {
        try {
            const client = await pool.connect();
            const { page, size } = req.query;
            const query = `
                SELECT *
                FROM playlist
                ORDER BY playlist.id
                LIMIT $2
                OFFSET (($1 - 1) * $2);
            `;

            try {
                const { rows } = await client.query(query, [page, size]);
                res.status(200).json(rows);
                return res.end()
            } finally {
                await client.release();
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getPlaylistByFilter(req, res) {
        const client = await pool.connect();

        const performer = req.query.performer;
        const genre = req.query.genre;
        const year = req.query.year;

        let sql = 'SELECT * FROM playlist';
        let params = [];

        if (performer || genre || year) {
            sql += ' WHERE';
        }

        if (performer) {
            sql += ' performer = $1';
            params.push(performer);
        }

        if (genre) {
            if (params.length > 0) {
                sql += ' AND';
            }
            sql += ' genre = $' + (params.length + 1);
            params.push(genre);
        }

        if (year) {
            if (params.length > 0) {
                sql += ' AND';
            }
            sql += ' year = $' + (params.length + 1);
            params.push(year);
        }

        client.query(sql, params, (error, results) => {
            if (error) {
                res.status(400).json({
                    error: error
                });
            }
            res.json({
                data: results.rows
            });
        });
    }

    async getPlaylistAscDscOrder(req, res) {
        const client = await pool.connect();
        const sortBy = req.query.sortBy;
        const order = req.query.order;

        let sortedPlaylist = await client.query('SELECT * FROM playlist');

        switch (sortBy) {
            case 'performer':
                sortedPlaylist.rows.sort((a, b) => {
                    return a.performer.localeCompare(b.performer);
                });
                break;
            case 'song':
                sortedPlaylist.rows.sort((a, b) => {
                    return order === 'asc' ? a.song.localeCompare(b.song) : b.song.localeCompare(a.song);
                });
                break;
            case 'genre':
                sortedPlaylist.rows.sort((a, b) => {
                    return order === 'asc' ? a.genre.localeCompare(b.genre) : b.genre.localeCompare(a.genre);
                });
                break;
            case 'year':
                sortedPlaylist.rows.sort((a, b) => {
                    return order === 'asc' ? a.year - b.year : b.year - a.year;
                });
                break;
        }

        res.json(sortedPlaylist);
        res.end();
    }
}

module.exports = new PlaylistController();