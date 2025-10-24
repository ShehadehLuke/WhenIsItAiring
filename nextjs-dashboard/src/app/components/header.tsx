import { SearchInput } from "./searchbar";

const Header = () => {
    return (
        <div className="bg-white shadow-lg font-bold p-5 text-center">
            <h1 className="text-2xl">Anime Tracker</h1>
        
            <p className="text-lg">Search for an anime to check when it is next airing</p>

            <SearchInput placeholder="hunter x hunter"/>
            
        </div>
    )
}

export default Header