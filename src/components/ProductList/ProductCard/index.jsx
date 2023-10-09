export const ProductCard = ({ product, isAddProduct }) => {

    const handleAdd = () => {
        isAddProduct(product)
    }

    return (
        <li>
            <div>
                <img src={product.img} alt={product.name} />
            </div>

            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={handleAdd} >Adicionar</button>
            </div>
        </li>
    )
}