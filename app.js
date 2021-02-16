import {requisicao} from './data.js'

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express')
const app = express()

const PORT = process.env.PORT || 8877

app.get('list/', (req, res) => {
    res.json(requisicao)
})

app.get('/about', (req, res) => {
    res.json(
        {
            name: 'Elias Severiano',
            contato: [
                {
                    type: 'email',
                    key: 'eliasseverianoamaral@gmail.com',
                },
                {
                    type: 'git',
                    key: 'https://github.com/eliasamaral'
                },
            ]
        })
})

app.listen(PORT, () => {
    console.log('Porta ' + PORT);
})