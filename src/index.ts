import express from 'express'
import http from 'http'
import getSite from '../routes/getAllUsers';

const PORT = 5000

const app = express();
const server = new http.Server(app);
server.listen(PORT, () => {
    console.info(`Server port in ${PORT}`)
})

app.use('/getuser', getSite)