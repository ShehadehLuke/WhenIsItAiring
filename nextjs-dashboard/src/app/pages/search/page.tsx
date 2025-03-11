import AllResults from "@/app/components/search"
import {SearchInput} from "@/app/components/searchbar"

export default function Search() {
    return (
      <div className="text-center">
        <SearchInput defaultValue={""}></SearchInput> 
        <h1 className="text-xl font-mono">Search Results</h1>
        <AllResults />
      </div>
    )
}