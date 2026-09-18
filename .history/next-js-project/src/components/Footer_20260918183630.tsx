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
                    <Link href="/categorias">Categorias</Link>
                </div>

                <div>
                    <h3>
                        Funcionamento
                    </h3>

                    <p>
                        Terça a Domingo: 18h às 23h
                    </p>
                </div>
           </div>
        </footer>
    )

}