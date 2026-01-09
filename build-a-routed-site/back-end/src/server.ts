import http from 'node:http'
import { stories } from './data/stories.js'
import { sendResponse } from './utils/sendResponse.js'

const PORT = 8000

const data = stories

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    const urlObj = new URL(req.url ?? '/', `http://${req.headers.host}`)

    if (req.method === 'OPTIONS') {
        res.writeHead(204)
        res.end()
        return
    }

    if (urlObj.pathname === '/api') {
        sendResponse(res, 200, data)
        console.log('Enviado')
    } else {
        sendResponse(res, 404, 'Não encontrado')
    }
})

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
