const Router = require('express');
const router = new Router();
const playlistController = require('../controller/playlist.controller');

router.get('/playlist', playlistController.getPlaylist);

module.exports = router;