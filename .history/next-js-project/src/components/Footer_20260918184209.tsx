import Link from "next/link"

export default function Footer(){

    return(

        <footer>
           <div className="grid grid-cols-3 bg">
                <div>
                    <h2 className="font-bold text-orange-600">
                        Sabor & Arte
                    </h2>

                    <p>
                        O melhor menu digital da região. Pratos artesanais feitos com 
                        paixão, ingredientes frescos e entrega rápida na sua mesa.
                    </p>
                </div>

                <div>
                    <h3 className = "text-white font-bold">
                        Navegação
                    </h3>

                    <Link className = "block" href="/">Inicio</Link>
                    <Link className = "block" href="/cardapio">Cardápio Completo</Link>
                    <Link className = "block" href="/categorias">Categorias</Link>
                </div>

                <div>
                    <h3>
                        Funcionamento
                    </h3>

                    <p>
                        Terça a Domingo: 18h às 23h30
                        Atendimento local e Delivery
                    </p>

                    <hr />

                    <p>
                        Dúvidas ou Reservas ?
                    </p>

                    <strong>
                        (47) 99999-9999
                    </strong>
                </div>
           </div>
        </footer>
    )

}