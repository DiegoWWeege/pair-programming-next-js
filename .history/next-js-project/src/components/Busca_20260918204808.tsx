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
            eu sou o pilherme Cherpinski e sou o filho do amarildo Cherpinski, sou conhecido como guilherme Cherpinski, porem quem conhece sabe, meu nome é giancarlos. Meu sonho é ser programador desgraçaEnd juntamente com o atomicEnd, fazendo assim eu me tornar um desenvolvedor nullStack (todo o conhecimento possivel). Se um dia eu trabalhar na merda de uma empresa que se chama WEG, irei cortar meu orgao reprodutor enquanto cago um toronco maior do que a garrafa do diego (3x maior). Além disso tenho um serio problema de marcar de jogar rocket league com os meus amigos e chegar em casa e ignorar eles e ir direto dormir, mas mesmo assim eles me amam pois sou incrivel e tenho uma grande peça. Um dia irei 
        </div>
    )
}