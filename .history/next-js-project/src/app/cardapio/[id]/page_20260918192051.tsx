import Link from "next/link";
import Image from "next/image";

export default async function DetalhePrato({params} : any){
    const {id} = await params;

    const res = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`,{
        cache: 'no-store'
    });

    const prato = await res.json();

    return (
        <main className="max-w-5xl mx-auto p-10">
            {/* Botão de Voltar */}
            <Link href = "/cardapio" className = "text-orange-600 hover:underline mb-6 inline-block">
                Voltar para o Cardápio
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
                {/*Lado Esquerdo: Imagem Otimizada*/}
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                    src = {prato}></Image>
                </div>
            </div>
        </main>
    );
}