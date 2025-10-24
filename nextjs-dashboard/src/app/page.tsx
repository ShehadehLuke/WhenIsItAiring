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
        <div>
            <Header />
            <br></br>
            <Suspense><AllResults query={query} currentPage={currentPage}/></Suspense>
        </div>
    )
}