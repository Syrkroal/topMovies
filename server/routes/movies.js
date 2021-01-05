const express = require('express');
const axios = require('axios');
require('dotenv/config');

const router = express.Router();

const movieUrl = "https://api.themoviedb.org/3/movie/"

//get top rated movies
router.get('/toprated', async (_, res) => {
    const url = movieUrl + "top_rated?api_key=" + process.env.TMDB_API_KEY + "&language=en-US&page=1";
    const response = await axios.get(url);
    
    if (response.data.success == false) {
        res.json({ message: response.status_message });
    }

    res.json({ movies: response.data.results });
});

//get popular movies
router.get('/popular', async (_, res) => {
    const url = movieUrl + "popular?api_key=" + process.env.TMDB_API_KEY + "&language=en-US&page=1";
    const response = await axios.get(url);
    
    if (response.data.success == false) {
        res.json({ message: response.status_message });
    }

    res.json({ movies: response.data.results });
});

//get information about a movie
router.get('/info/:id', async (req, res) => {
    const url = movieUrl + req.params.id + "?api_key=" + process.env.TMDB_API_KEY + "&language=en-US";
    const response = await axios.get(url);
    
    console.log(response.data);
    if (response.data.success == false) {
        res.json({ message: response.status_message });
    }

    res.json({ infos: response.data });
});

//get credits for a movie
router.get('/credits/:id', async (req, res) => {
    const url = movieUrl + req.params.id + "/credits?api_key=" + process.env.TMDB_API_KEY + "&language=en-US";
    const response = await axios.get(url);
    
    console.log(response.data);
    if (response.data.success == false) {
        res.json({ message: response.status_message });
    }

    res.json({ cast: response.data.cast });
});

module.exports = router