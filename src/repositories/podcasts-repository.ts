// "fs" Serve para ler e escrever em arquivo de sistemas
import fs from 'fs'
import path from 'path'
import { PodcastModel } from '../models/podcast-model'

// Lendo o caminho do arquivo
const pachData = path.join(__dirname, '../repositories/podcasts.json')

export const repositoryPodcast = async (
    podcastName?: string
): Promise<PodcastModel[]> => {
    const language = "utf-8"
    const rawData = fs.readFileSync(pachData, language)
    let jsonFile = JSON.parse(rawData) // Ler o texto e conveter em JSON

    if(podcastName){
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        )
    }
    
    return jsonFile
}