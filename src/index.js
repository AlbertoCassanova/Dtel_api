import express from "express";

const port = 3000
const app = express()

let server = app.listen(port, () => {
    server.address() == '::' ? console.log("Server listening in https://" + server.address().address + server.address().port) : console.log("Server listening in https://localhost:" + server.address().port);
})