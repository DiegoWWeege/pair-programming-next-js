import BotaoFavorito from "@/components/BotaoFavorito"

export default async function PaginaCardapio(){
    
    const res = await fetch("https://api-restaurante-5iqb.onrender.com/api/produtos",{
        next: {revalidate: 60}
    });
    
    const produtos = awa res.json();

    return (
        <main className="p-10">
            <h1 className="text-3xl font-bold">Nosso cardápio completo</h1>
            
            <p className="text-gray-500 mt-2">Em breve aqui aparecerão os pratos da nossa API!</p>
        </main>
    )
}