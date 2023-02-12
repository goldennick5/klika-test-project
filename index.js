const express = require('express');
const cors = require('cors');
const path = require('path');
const playlistRouter = require('./routes/playlist.routes');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

//app.use(express.static(path.join(__dirname, "client/dist")));

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/dist")));
}

app.use('/api', playlistRouter);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"))
})