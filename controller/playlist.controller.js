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
            } finally {
                await client.release();
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getFilteredPlaylist(req, res) {
        const client = await pool.connect();

        const {performer, genre, year} = req.query;

        let arr = [];
        let query = 'SELECT * FROM playlist';

        if(performer || genre || year){
            query += ' WHERE';
        }

        if(performer){
            query += ' performer = $1';
            arr.push(performer);
        }

        if(genre){
            if(arr.length > 0){
                query += ' AND';
            }
            query += ' genre = $' + (arr.length + 1);
            arr.push(genre);
        }

        if(year){
            if(arr.length > 0){
                query += ' AND';
            }
            query += ' year = $' + (arr.length + 1);
            arr.push(year);
        }

        client.query(query, arr, (error, results) => {
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
}

module.exports = new PlaylistController();