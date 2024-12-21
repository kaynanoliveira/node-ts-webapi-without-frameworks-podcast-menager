import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async ():Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
         StatusCode: 0,
         body: []
    }
    const data = await repositoryPodcast()

    responseFormat = {
        StatusCode:     responseFormat.StatusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data
    }

    return responseFormat
}