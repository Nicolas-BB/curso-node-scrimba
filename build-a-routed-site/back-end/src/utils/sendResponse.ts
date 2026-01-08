import type { IncomingMessage, ServerResponse } from "node:http"

type functionTypes = {
    res: ServerResponse<IncomingMessage>,
    statusCode: number,
    response: unknown
}

export function sendResponse({res, statusCode, response}: functionTypes) {
    res.statusCode = statusCode
    res.end(response)
}
