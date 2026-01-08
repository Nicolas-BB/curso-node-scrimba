import http from 'node:http'
import { stories } from './data/stories.js'

const PORT = 8000

const data = stories

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')

    const urlObj = new URL(req.url ?? '/', `http://${req.headers.host}`)

    if (req.url === '/api') {
        res.end
    }
})

console.log(import.meta.dirname)

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
