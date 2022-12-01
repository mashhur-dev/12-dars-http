import http, {IncomingMessage, ServerResponse } from 'http'

const fruits = [
    'apple',
    'banana'
]

function onStart() {
    console.log('Server is running');
}

function handler(request: IncomingMessage, response: ServerResponse) {   
    console.log('Server is running!');
    
}

const server = http.createServer(handler)
server.listen(8080, 'localhost', onStart)