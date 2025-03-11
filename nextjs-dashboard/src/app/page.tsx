import { SearchInput } from "./components/searchbar";
export default async function Home()
{

    return (
        <div>
            <div className="text-center bg-blue-400 shadow-xl h-[100px] font-mono font-bold p-5">
                <h1 className="text-2xl">Anime Tracker</h1>
            
                <p className="text-lg">Search for an anime to check when it's next airing</p>
            </div>
            <br></br>
            <SearchInput defaultValue={""}/>
        </div>
    )
}