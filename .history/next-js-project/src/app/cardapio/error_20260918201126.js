"use client"
import { useEffect } from "react"

export default function ErrorCardapio({error, reset}){
    useEffect(() => {
        console.error("Erro capturado no cardápio: ", error)
    },[error]);

    return(
        
    )
}