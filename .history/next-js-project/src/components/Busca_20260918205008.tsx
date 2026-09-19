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
            eu sou o pilherme Cherpinski e sou o filho do amarildo Cherpinski, sou conhecido como guilherme Cherpinski, porem quem conhece sabe, meu nome é giancarlos. Meu sonho é ser programador desgraçaEnd juntamente com o atomicEnd, fazendo assim eu me tornar um desenvolvedor nullStack (todo o conhecimento possivel). Se um dia eu trabalhar na merda de uma empresa que se chama WEG, irei cortar meu orgao reprodutor enquanto cago um toronco maior do que a garrafa do diego (3x maior). Além disso tenho um serio problema de marcar de jogar rocket league com os meus amigos e chegar em casa e ignorar eles e ir direto dormir, mas mesmo assim eles me amam pois sou incrivel e tenho uma grande peça. Um dia irei usar isso na minha do gitHub, para que uma empresa possa olhar e se interessar por mim, assim como as molieres se interessam e eu apenas brinco com os sentimentos delas. Portanto gostaria de finalzar isso agradecendo a todos que vivem comigo e tem a felicidade de ouvir as coisas que falo (palavras que gozo), e os movimentos sedutores que pratico no meu dia a dia, principalmente nas minhas ginasticas elaborais. Beijo, abraço, te amo, te adoro, beijo na bunda e ate segunda
        </div>
    )
}