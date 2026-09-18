import Link from "next/link";


export default function NavBar(){

    return (
        <nav className="flex gap-6 p-6 bg-orange-600 text-white shadow-lg">
            <Link href= "/" className="font-bold hover:text-orange-200">Início</Link>

            <Link href= "/cardapio" className="font-bold hover:text-orange-200"></Link>

            <Link href= "/cardapio" className="font-bold hover:text-orange-200"></Link>
        </nav>
    )
}