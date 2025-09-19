import { SearchInput } from "./components/searchbar";
import Header from "./components/header"
import AllResults from "./components/search";
import { Suspense } from "react";

export default async function Home(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
    }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    return (
        <div className="mt-4 mb-4 ml-24 mr-24">
            <Header />
            <br></br>
            <SearchInput placeholder="hunter x hunter"/>

            <Suspense><AllResults query={query} currentPage={currentPage}/></Suspense>
        </div>
    )
}