const express = require('express');
const app = express();

app.get("/", (request, response) => {
    return response.json({ message: 'Hello, world Ignite - fundamentos de node.js' });
})
app.listen(3333)