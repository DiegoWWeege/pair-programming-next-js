"use client"
import { useEffect } from "react"

export default function ErrorCardapio({error, reset}){
    useEffect(() => {
        console.error()
    },[error])
}