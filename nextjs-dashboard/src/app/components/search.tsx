'use client';

import { JSX, Suspense, useEffect, useState } from "react";
import { searchAnime } from "../getData"
import { SearchResult } from "./searchResult"
import { useSearchParams } from "next/navigation"

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

const AllResults = () => {
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams()
    const searchInput = searchParams && searchParams.get("q");
    let JSONResults: any;
    useEffect(() => {
        const getResults = async() => {
            allResults = [];
            try{
                JSONResults = await searchAnime(searchInput)
            } finally {
                setLoading(false);
            }
            console.log(JSONResults)
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
            
            results = allResults.map((result, index) =>
                <SearchResult key={index} title={result.title} image={result.image} timeUntilAiring={result.timeUntilAiring} lastEpisodeMonth={result.timeLastAiredMonth} lastEpisodeYear={result.timeLastAiredYear} airingTime={result.airingTime} nextEpisode={result.nextEpisode}/>
            )
        }
        getResults();
    }, []);
    if (loading) return <p>Loading...</p>
    return results;
};

export default AllResults;