"use client";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Busca(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
}

function handleSearch(termo : String){
    const params = new URLSearchParams(SearchParamsContext)
}