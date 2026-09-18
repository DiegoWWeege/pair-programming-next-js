import { useState } from "react";

export default function BotaoFavorito(){
    const[favorito, setFavorito] = useState(false);

    return (
        <button onClick={() => setFavorito(!favorito)} className={`mt-2 px-4 py-2 rounded-md transition-colors ${favorito ? 'bg-red-500 text-white' : 'pg-gray-200 text-grey-700 hover:bg-grey-300'}`}>
            {favorito ? 'Diego Lindo' : '' }
        </button>
    )
}