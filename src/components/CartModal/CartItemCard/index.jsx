import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, onRemoveItem }) => {

   const handleRemoveItem = () => {
      onRemoveItem(product.id)
   }
   return (
      <li>
         <div>
            <img src={product.img} alt={product.name} />
            <div >
               <h3>{product.name}</h3>
               <span>{`R$ ${product.price.toFixed(2)}`}</span>
            </div>
         </div>
         <button onClick={handleRemoveItem} aria-label="delete" title="Remover item">
            <MdDelete size={21} fill="#BDBDBD" />
         </button>
      </li>
   );
};
