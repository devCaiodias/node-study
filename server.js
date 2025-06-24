import http from "http"

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Apendendo node com express")
})

server.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})