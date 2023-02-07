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
            const client = await pool.connect(); // creates connection
            const { page, size } = req.query;
            const query = `
                SELECT *
                FROM playlist
                ORDER BY playlist.id
                LIMIT $2
                OFFSET (($1 - 1) * $2);
        `;
            try {
                const { rows } = await client.query(query, [page, size]); // sends query
                res.status(200).json(rows);
            } finally {
                await client.release(); // releases connection
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new PlaylistController();