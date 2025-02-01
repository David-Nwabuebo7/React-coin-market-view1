import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'node:process';
const app = express();
const PORT = 3001;
dotenv.config();
app.use(cors());
app.use(express.json());


const API_KEY = process.env.VITE_COINMARKETCAP_API_KEY;
app.get('/api/cryptos', async (req, res) => {
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
     // Replace with your actual API key

    try {
        const response = await fetch(url, {
            headers: {
                'X-CMC_PRO_API_KEY': API_KEY,
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Error:', err);
});

