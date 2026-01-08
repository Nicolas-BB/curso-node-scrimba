import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')

    const destinations = await getDataFromDB()
    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    if (urlObj.pathname === '/api' && req.method === 'GET') { // Retorna geral
        const response = getDataByQueryParams(Object.fromEntries(urlObj.searchParams), destinations)

        sendJSONResponse(res, 200, response)
    } else if (urlObj.pathname.split('/')[2] === 'continent' && req.method === 'GET') {
        const pathFiltered = getDataByPathParams(urlObj.pathname, destinations)

        if (urlObj.searchParams.size > 0) {
            const queryFiltered = getDataByQueryParams(Object.fromEntries(urlObj.searchParams), pathFiltered)

            sendJSONResponse(res, 200, queryFiltered)
        } else {
            sendJSONResponse(res, 200, pathFiltered)
        }
    } else {
        sendJSONResponse(res, 404, { error: 'não encontrado' })
    }
})

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
