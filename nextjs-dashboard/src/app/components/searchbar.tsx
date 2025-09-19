'use client';

import { useState, ChangeEvent, Suspense } from "react"
import { useSearchParams, usePathname, useRouter} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const SearchInput = ({placeholder}: {placeholder: string}) => {

    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term){
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    return (
        <div className="search_input border-[2px] border-solid border-slate-500 flex flex-row items-center justify-center gap-5 rounded-[15px] mb-4">
            <input 
            className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr=3 text-center"
            type="text" 
            id="inputID" 
            placeholder="Hunter x Hunter" 
            onChange={(e) => {
                handleSearch(e.target.value)
            }}
            autoComplete="off"
            defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}
