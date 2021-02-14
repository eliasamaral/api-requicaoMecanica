import {requisicao} from './data.js'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express')
const app = express()

const PORT = process.env.PORT || 8877

app.get('/', (req, res) => {
    res.json(requisicao)
})

app.get('/about', (req, res) => {
    res.json({
        name: 'elias'
    })
})

app.listen(PORT, () => {
    console.log('Porta ' + PORT);
})