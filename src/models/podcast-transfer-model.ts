import { PodcastModel } from "./podcast-model";

export interface PodcastTransferModel {
    StatusCode: number,
    body: PodcastModel[]
}