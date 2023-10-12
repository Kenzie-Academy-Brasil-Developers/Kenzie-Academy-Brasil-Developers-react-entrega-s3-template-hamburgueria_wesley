import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { getAllItems } from "../../services/GetItems";

export const HomePage = () => {
   const ltg = localStorage.getItem("@humburgueria-kenzie")

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
      const productLocal = JSON.parse(ltg)
      setCartList([productLocal])
      setOpenModal(data)

   };

   const handleInsertCart = (product) => {

      const prod = cartList.some((item) => {
         return item.id === product.id
      })

      if (!prod) {
         localStorage.setItem("@humburgueria-kenzie", JSON.stringify(product))
         setCartList([...cartList, product])
      }
      setCartItemCount(cartList.length)
   }
   const handleCloseModal = (data) => {
      setOpenModal(data)
   }

   const handkeRemoveAll = () => {
      setCartList([])
      handleCloseModal()
   }

   const handleRemoveItem = (id) => {
      const filterCart = cartList.filter((item) => {
         if (item.id !== id) {
            return item
         }
      })
      setCartList(filterCart)
   }

   useEffect(() => {
      handleShowItems()
   }, []);
   return (
      <>
         <Header handleShowModal={handleHeaderButtonClick} cartItemCount={cartItemCount} />
         <main>
            <ProductList handleAddCart={handleInsertCart} productList={productList} />
            {openModal && (
               <CartModal onRemoveItem={handleRemoveItem} removeAllItems={handkeRemoveAll} cartList={cartList} onCloseModal={handleCloseModal} />
            )}
         </main>
      </>
   );
};
