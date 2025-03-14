import AllResults from "@/app/components/search"
import { Suspense } from "react"
import {SearchInput} from "@/app/components/searchbar"

export default function Search() {
    return (
      <div className="text-center">
        <SearchInput defaultValue={""}></SearchInput> 
        <h1 className="text-xl font-mono">Search Results</h1>
        <Suspense><AllResults /></Suspense>
      </div>
    )
}