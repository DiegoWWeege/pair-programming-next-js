"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Busca(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(termo : String){
    const params = new URLSearchParams(searchParams);

    if (termo) {
        params.set('busca',termo);
    }else{
        params.delete('busca')
    }

    replace(`${pathname}?${params.toString()}`)
    }

    return(
        <div>
            eu sou o pilherme Cherpinski e sou o filho do amarildo Cherpinski, sou conhecido como guilherme Cherpinski, porem quem conhece sabe, meu nome é giancarlos. Meu sonho é ser programador desgraçaEnd 
        </div>
    )
}