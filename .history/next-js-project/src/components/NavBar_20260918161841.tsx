import Link from "next/link";


export default function NavBar(){

    return (
        <nav className="flex items-center justify-between p-6 bg-white shadow-md">
            <h2 className="text-2xl font-bold text-orange-600">Sabor & Arte</h2>

            <div className="flex gap-6">
                <Link href= "/" className="text-gray-700 hover:text-orange-600 font-mediu">Início</Link>

                <Link href= "/cardapio" className="font-bold hover:text-orange-200">Cardápio</Link>

                <Link href= "/categorias" className="font-bold hover:text-orange-200">Categorias</Link>
            </div>
            
        </nav>
    );
}