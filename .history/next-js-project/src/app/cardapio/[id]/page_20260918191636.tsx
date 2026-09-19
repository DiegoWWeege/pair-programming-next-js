

export default async function DetalhePrato({params} : any){
    const {id} = await params;

    const res = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`,{
        cache: 'no-store'
    });

    const prato = await res.json();

    return (
        <main className="max-w-5xl mx-auto p-10">
            {/* Botão de Voltar */}
            <Link>
            </Link>
        </main>
    );
}