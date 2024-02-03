// Print out current working directory.
Bun.serve({
    port: 3000,
    fetch(req, server) {
        const url = new URL(req.url);

        if (url.pathname === '/ws') {
            server.upgrade(req);
            return;
        }
        
        // Else serve public directory.
        const path = url.pathname === '/' ? '/index.html' : url.pathname;
        return new Response(Bun.file(`./${path}`));
    },
    websocket: {
        message(ws, message) {

        },
    },
});
