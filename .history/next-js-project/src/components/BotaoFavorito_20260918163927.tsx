import { useState } from "react";

export default function BotaoFavorito(){
    const[favorito, setFavorito] = useState(false);

    return (
        <button onClick={() => setFavorito(!favorito)} className={`mt-2 px-4 py-2 rounded-md transitions`}>
            
        </button>
    )
}