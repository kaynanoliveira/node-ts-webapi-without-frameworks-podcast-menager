import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    // Define o contrato
    let responseFormat: PodcastTransferModel = {
        StatusCode: 0,
        body: []
    }

    // Busca os dados
    const queryString = podcastName?.split("?p=")[1] || "" 
    const data = await repositoryPodcast(queryString)
    

    // verifica o tipo de resposta
    responseFormat = {
        StatusCode:     responseFormat.StatusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }

    return responseFormat
}