import { JSX, Suspense} from "react";
import { searchAnime } from "../getData"
import { SearchResult } from "./searchResult"

let results: JSX.Element[] = [];
interface Result {
    id: string;
    title: string;
    image: string; 
    timeLastAiredYear: number;
    timeLastAiredMonth: number;
    timeUntilAiring: number | null;
    nextEpisode: number | null;
    airingTime: number | null;
}
let allResults: Result[] = [];

export default async function AllResults({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    let JSONResults: any;
    const getResults = async() => {
        allResults = [];
        JSONResults = await searchAnime(query)
        for (let i = 0; i < JSONResults.data.Page.media.length; i++){           
            allResults.push({
                id: JSONResults.data.Page.media[i].id,
                title: JSONResults.data.Page.media[i].title.romaji,
                image: JSONResults.data.Page.media[i].coverImage.extraLarge,
                timeLastAiredYear: JSONResults.data.Page.media[i].endDate.year,
                timeLastAiredMonth: JSONResults.data.Page.media[i].endDate.month,
                timeUntilAiring: JSONResults.data.Page.media[i].nextAiringEpisode?.timeUntilAiring ?? null,
                nextEpisode: JSONResults.data.Page.media[i].nextAiringEpisode?.episode ?? null,
                airingTime: JSONResults.data.Page.media[i].nextAiringEpisode?.airingAt ?? null
            })
        }
        return allResults.map((result, index) =>
            <SearchResult key={index} title={result.title} image={result.image} timeUntilAiring={result.timeUntilAiring} lastEpisodeMonth={result.timeLastAiredMonth} lastEpisodeYear={result.timeLastAiredYear} airingTime={result.airingTime} nextEpisode={result.nextEpisode}/>
        )
    }
    return getResults();
};
