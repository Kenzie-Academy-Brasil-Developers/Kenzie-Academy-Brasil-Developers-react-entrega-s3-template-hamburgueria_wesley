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
      console.log(resp);
      setProductList(resp)
      setCartItemCount(resp.length)
   }


   const handleHeaderButtonClick = (data) => {
      setOpenModal(data)
   };

   const handleInsertCart = (product) => {
      setCartList([...cartList, product])
   }

   useEffect(() => {
      handleShowItems()
   }, [])

   return (
      <>
         <Header handleShowModal={handleHeaderButtonClick} cartItemCount={cartItemCount} />
         <main>
            <ProductList handleAddCart={handleInsertCart} productList={productList} />
            <CartModal isOpenModal={openModal} cartList={cartList} />
         </main>
      </>
   );
};
