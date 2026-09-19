"use client"
import { useEffect } from "react"

export default function ErrorCardapio({error, reset}){
    useEffect(() => {
        console.error("Erro capturado no cardápio: ", error)
    },[error]);

    return(
        <main className="flex flex-col items-center justify-center min-h-[60vh] p-10 text-center">
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 max-w-wd">
                <h2 className="text-4xl mb-4">
                    <h1 className="">

                    </h1>
                </h2>
            </div>
        </main>
    )
}