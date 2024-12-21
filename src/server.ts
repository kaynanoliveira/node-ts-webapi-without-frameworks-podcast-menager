// Configuração do servidor
import * as http from 'http'
import { app } from './app'

// Criando servidor
const server = http.createServer(app)
const port = process.env.PORT

// Essa função faz o servidor começar a escutar na porta definida anteriormente.
server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})