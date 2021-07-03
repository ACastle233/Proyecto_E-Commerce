const http = require('http');
require('dotenv').config();

function request(req, res) {
    res.write(`Bienvenido al BackEnd`);
    res.end();
}
const server = http.createServer(request);

server.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`);
});