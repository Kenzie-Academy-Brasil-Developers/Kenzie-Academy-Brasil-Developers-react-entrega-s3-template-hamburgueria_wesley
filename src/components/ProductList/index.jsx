import { ProductCard } from "./ProductCard";
import styles from './styles.module.scss'

export const ProductList = ({ productList, handleAddCart }) => {
   const addItem = (data) => {
      handleAddCart(data);
   }

   return (
      <section className=".container">
         <ul>
            {productList.map((product) => (
               <ProductCard isAddProduct={addItem} key={product.id} product={product} />
            ))}
         </ul>

      </section>
   );
};
