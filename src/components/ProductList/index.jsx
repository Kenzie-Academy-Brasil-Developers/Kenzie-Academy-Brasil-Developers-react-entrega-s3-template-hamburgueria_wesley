import { ProductCard } from "./ProductCard";
import styles from './styles.module.scss'

export const ProductList = ({ productList, handleAddCart }) => {
   const teste = (data) => {
      handleAddCart(data);
   }

   return (
      <section className=".container">
         <ul>
            {productList.map((product) => (
               <ProductCard isAddProduct={teste} key={product.id} product={product} />
            ))}
         </ul>

      </section>
   );
};
