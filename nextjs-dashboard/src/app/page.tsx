import { SearchInput } from "./components/searchbar";

export default async function Home()
{

    return (
        <div>
            <h1>Anime Tracker</h1>

            <p>Search for an anime to check when it's next airing</p>
            <SearchInput defaultValue={""}/>
        </div>
    )
}