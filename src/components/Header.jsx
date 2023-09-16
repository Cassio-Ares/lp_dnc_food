import "./Header.css"

export const Header = () => {
    
  return (
    <div className="header">
        <img src="dnc_logo.svg" alt="Logo DNC FOOD" />

        <div>
            <ul>
                <li>Variedades</li>
                <li>Lanches</li>
                <li>Pizzas</li>
                <li>Doces</li>
                <li>Promoções</li>
            </ul>
        </div>

        <div className="header_carrinho"> 
            Minhas compras 
            <img src="carrinho.svg" alt="Carrinho de compras" />
        </div>
    </div>
  )
}
