import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from './styles.module.scss'

export const Header = ({ cartItemCount, handleShowModal }) => {
   const [value, setValue] = useState("");

   const handleModal = () => {
      handleShowModal(true)
   }

   useEffect(() => {
      setValue(cartItemCount)
   }, [cartItemCount])
   return (
      <header className=".container">
         <div>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div>
               {/* <form>
                  <input
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                  />
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </form> */}
               <button onClick={handleModal}>
                  <MdShoppingCart size={21} fill="#BDBDBD" />
                  <span>{value}</span>
               </button>
            </div>
         </div>
      </header>
   );
};
