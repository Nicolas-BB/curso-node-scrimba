export const sendJSONResponse = (res, statusCode, response) => {
    res.statusCode = statusCode
    res.end(JSON.stringify(response))
}
