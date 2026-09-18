import Link from "next/link"

export default function Footer(){

    return(

        <footer>
           <div className="grid grid-cols-3 bg">
                <div>
                    <h2>
                        Sabor & Arte
                    </h2>

                    <p>
                        O melhor menu digital da região. Pratos artesanais feitos com 
                        paixão, ingredientes frescos e entrega rápida na sua mesa.
                    </p>
                </div>

                <div>
                    <h3>
                        Navegação
                    </h3>

                    <Link href="/">Inicio</Link>
                    <Link href="/cardapio">Cardápio Completo</Link>
                </div>

                <div>

                </div>
           </div>
        </footer>
    )

}