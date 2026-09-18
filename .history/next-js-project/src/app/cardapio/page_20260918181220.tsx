import BotaoFavorito from "@/components/BotaoFavorito"
import Image from "next/image";

export default async function PaginaCardapio(){
    
    const res = await fetch("https://api-restaurante-5iqb.onrender.com/api/produtos",{
        next: {revalidate: 60}
    });
    
    const produtos = await  res.json();

    return (
        <main className="p-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 font-serif">Nosso cardápio</h1>

                    <p className="text-grey-500 mt-2">Pratos artesanais preparados com ingredientes frescos</p>
                </div>

                <span className="text-sm bg-grey-100 px-3 py-1 rounded-full text-grey-400">
                    {
                        produtos.length
                    }
                    Itens encontrados
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { produtos.map((prato : any) =>{
                        const url = prato.imagem ?.replace(/[<>]/g, "").trim();

                        return(
                            <div key= {prato.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-grey-100 hover:shadow-xl transition-shadow">
                                <div className="relative h-56 w-full">
                                    {url ? (<Image src = {url} alt= {prato.nome || "Foto do prato"} fill className="object-cover" sizes = "(max-width: 768px) 10vw, (max-width: 1200px)50vw, 33vw" unoptimized></Image>
                            
                        ): (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                                Sem imagem
                            </div>
                        )}
                        

                    }
            </div>
        </main>
    )
}