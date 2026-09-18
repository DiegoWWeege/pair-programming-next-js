import Link from "next/link"

export default function Footer(){

    return(

        <footer>
           <div className="grid grid-cols-3 bg pl-5 bg-[#101828] pt-10 pb-20">
                <div>
                    <h2 className="font-bold text-orange-600 text-2xl mb-5 ">
                        Sabor & Arte
                    </h2>

                    <p className="w-110">
                        O melhor menu digital da região. Pratos artesanais feitos com 
                        paixão, ingredientes frescos e entrega rápida na sua mesa.
                    </p>
                </div>

                <div>
                    <h3 className = "text-white font-bold mb-5">
                        Navegação
                    </h3>

                    <Link className = "block" href="/">Inicio</Link>
                    <Link className = "block" href="/cardapio">Cardápio Completo</Link>
                    <Link className = "block" href="/categorias">Categorias</Link>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-5">
                        Funcionamento
                    </h3>

                    <p className="mb-5 w-60">
                        Terça a Domingo: 18h às 23h30
                        Atendimento local e Delivery
                    </p>

                    <hr />

                    <p className="mt-5">
                        Dúvidas ou Reservas ?
                    </p>

                    <strong className="text-orange-600">
                        (47) 99999-9999
                    </strong>
                </div>

           </div>

            <hr />

           <div className = "flex items-center justify-center p">
                    <p>@ 2026 Sabor & Arte - Todos os direitos reservados.</p>
            </div>
        </footer>
    )

}