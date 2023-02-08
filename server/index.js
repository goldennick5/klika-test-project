const express = require('express');
const cors = require('cors');
const playlistRouter = require('./routes/playlist.routes');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', playlistRouter);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})