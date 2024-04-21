// routes.js
// import { fetch } from 'node-fetch';
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Sample data
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

const CLIENT_ID = 'H6WM3OBYFEDN6722CX';
const CLIENT_SECRET = 'DVB6BWUI7C2GPJSEPM6TYBOXE3XZHMW7FXSOMAMMGUG7QLB7B4';
const REDIRECT_URI = 'https://localhost:5000/oauth/callback'; // Update with your actual redirect URI


// Route to get all items
router.get('/items', (req, res) => {
    res.json(items);
});

// define the home page route
router.get('/', (req, res) => {
    res.send('Birds home page')
  })


router.get('/oauth/login', (req, res) => {
    res.redirect(`https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`);
});

// Callback route to exchange authorization code for access token
router.get('/oauth/callback', async (req, res) => {
    try {
        console.log('hit')
        const { code } = req.query;

        // Exchange authorization code for access token
        const response = await fetch('https://www.eventbrite.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                code,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                grant_type: 'authorization_code',
                redirect_uri: REDIRECT_URI
            })
        });

        if (!response.ok) {
            throw new Error('Failed to exchange authorization code for access token');
        }

        const { access_token } = await response.json();

        // Now you have the access token, you can use it to make authenticated requests to the Eventbrite API

        res.send('Authorization successful. You can now make API requests using the access token.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});



// Route to get a specific item by ID
router.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Route to add a new item
router.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

module.exports = router;