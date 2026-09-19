"use client"
import { useEffect } from "react"

export default function ErrorCardapio({error, reset}){
    useEffect(() => {
        console.error("Erro capturado no cardápio: ", error)
    },[error]);

    return(
        <main className="flex flex-col items-center justify-center min-h-[60vh]">

        </main>
    )
}