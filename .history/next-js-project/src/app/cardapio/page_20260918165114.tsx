import BotaoFavorito from "@/components/BotaoFavorito"

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

                <span className="text-sm bg-grey-100 px-3">

                </span>
            </div>
        </main>
    )
}