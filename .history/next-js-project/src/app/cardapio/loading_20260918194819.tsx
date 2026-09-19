export default function LoadingCardapio(){
    const skeletons = Array.from({length: 6})

    return(
        <main className="p-10 max-w-7xl mx-auto">
            <div className="h-10 w-48 bg-gray-200 animate-pulse rounded-md mb-10">
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skeletons.map((_,index) => (
                    <div key ={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
                        {/*Bloco da Imagem*/}
                        <div className="h-56 bg-gray-200 animate-pulse w-full">
                        </div>

                        <div className="p-6">
                            {}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}