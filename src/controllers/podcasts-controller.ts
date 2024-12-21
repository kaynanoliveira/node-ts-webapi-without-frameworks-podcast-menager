import { IncomingMessage, ServerResponse } from 'http'
import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from '../services/filter-episodes-service'
import { ContentType } from '../utils/content-type'
import { PodcastTransferModel } from '../models/podcast-transfer-model'

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    const content:PodcastTransferModel = await serviceListEpisodes()

    res.writeHead(content.StatusCode,{ "Content-Type": ContentType.JSON })
    res.write(JSON.stringify(content.body))  // Converte o JSON para uma string
    res.end() // Fim
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.StatusCode,{ "Content-Type": ContentType.JSON })
    res.write(JSON.stringify(content.body))
    res.end() 
}