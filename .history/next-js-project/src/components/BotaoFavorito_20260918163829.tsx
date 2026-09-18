import { useState } from "react";

export default function BotaoFavorito(){
    const[favorito, setFavorito] = useState(false);

    return (
        <button onClick={() => setFavorito(true)}>

        </button>
    )
}