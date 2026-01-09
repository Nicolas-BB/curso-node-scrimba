import type { IncomingMessage, ServerResponse } from "node:http"

type functionTypes = {
    res: ServerResponse<IncomingMessage>,
    statusCode: number,
    response: unknown
}

export function sendResponse(res: ServerResponse<IncomingMessage>, statusCode: number, response: unknown) {
    res.statusCode = statusCode
    res.end(JSON.stringify(response))
}
