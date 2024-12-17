const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, req) => {
    const origin = req.headers.origin; // Get the client's origin
    console.log(`Connection from origin: ${origin}`);


    //console.log('New connection established');
    
    // Log all currently connected clients
    logConnectedClients();

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
    });

    ws.send('Welcome client!');
});

// Function to log connected clients
function logConnectedClients() {
    console.log(`Number of connected clients: ${wss.clients.size}`);
}
