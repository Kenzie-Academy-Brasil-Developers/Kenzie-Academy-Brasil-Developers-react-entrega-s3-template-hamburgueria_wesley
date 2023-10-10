import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from './styles.module.scss'
import { useEffect, useState } from "react";

export const CartModal = ({ cartList, onCloseModal, removeAllItems }) => {

   const handleRemoveAll = () => {
      removeAllItems([])
   }
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   const handleCloseModal = () => {
      onCloseModal(false)
   }
   return (
      <div className={styles.container_diolog} role="dialog" >
         <div className={styles.centralize_dialog}>
            <div className={styles.header_cart}>
               <h2>Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={handleCloseModal} >
                  <MdClose size={21} fill="#FFFFFF80" />
               </button>
            </div>
            <div className={styles.body_cart}>
               <div >
                  <ul className={styles.list_cart}>
                     {cartList.map((product) => (
                        <CartItemCard key={product.id} product={product} />
                     ))}
                  </ul>
               </div>
               <div className={styles.footer_cart}>
                  <div>
                     <span>Total</span>
                     <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                  </div>
                  <button onClick={handleRemoveAll} >Remover todos</button>
               </div>
            </div>
         </div>
      </div >
   );

};
