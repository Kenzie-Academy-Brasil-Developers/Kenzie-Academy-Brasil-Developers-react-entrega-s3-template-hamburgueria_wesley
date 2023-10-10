import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { getAllItems } from "../../services/GetItems";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [cartItemCount, setCartItemCount] = useState(0);
   const [openModal, setOpenModal] = useState(false)

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   const handleShowItems = async () => {
      const resp = await getAllItems()
      setProductList(resp)
   }

   const handleHeaderButtonClick = (data) => {
      setOpenModal(data)
   };

   const handleInsertCart = (product) => {
      setCartList([...cartList, product])
      setCartItemCount(cartList.length)
   }

   const handleCloseModal = (data) => {
      setOpenModal(data)
   }

   const handkeRemoveAll = () => {
      setCartList([])
      handleCloseModal()
   }

   useEffect(() => {

      handleShowItems()
   }, [])
   return (
      <>
         <Header handleShowModal={handleHeaderButtonClick} cartItemCount={cartItemCount} />
         <main>
            <ProductList handleAddCart={handleInsertCart} productList={productList} />
            {openModal && (
               <CartModal removeAllItems={handkeRemoveAll} cartList={cartList} onCloseModal={handleCloseModal} />
            )}
         </main>
      </>
   );
};
