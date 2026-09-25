const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>Hello from Node.js!</h1>
        <p>Welcome to my simple Node.js application.</p>
        <p>This application was created using npm.</p>
    `);
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});