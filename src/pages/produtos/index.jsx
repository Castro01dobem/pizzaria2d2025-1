const Produtos = () => {
    //Objeto com a lista de pizzas
    const pizzas = [
        'Pizza de Mussarela',
        'Pizza de Calabresa',
        'Pizza Baiana',
        'Pizza Portuguesa'
    ]   
    //Interação da lista de pizzas
    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos
