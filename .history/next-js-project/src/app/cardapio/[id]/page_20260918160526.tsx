export default async function detalhePrato({params} : any){

    const {id} = await params;

    return (

        <div className="p-10">
            <h1 className="text-2xl font-bold ">Ficha Técnica do Produto</h1>
            <p className="mt-4"></p>
        </div>

    )
}