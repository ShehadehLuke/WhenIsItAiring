import AllResults from "@/app/components/search"
import {SearchInput} from "@/app/components/searchbar"

export default function Search() {
    return (
      <div>
        <SearchInput defaultValue={""}></SearchInput> 
        <h1>Search Results</h1>
        <AllResults />
      </div>
    )
}