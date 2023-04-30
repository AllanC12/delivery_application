import styles from "./sass_components/ModalOrder.module.scss";

import { useState,useRef, useEffect } from "react";

import { FaWindowClose } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md"

const ModalOrder = ({ orders,setOrders }) => {
  const modalRef = useRef();
  const [valueTotalOrder,setValueTotalOrder] = useState("")

  const sumValueOrder = () => {
    let valueOrder = orders.map((order) => (
       parseFloat(order.price)
    ))
    
    let sumValueOrder = valueOrder.reduce((accumulator,index)=> {
       return accumulator + index
    },0)

    setValueTotalOrder(sumValueOrder.toFixed(2))
  }

useEffect(()=>{
  sumValueOrder()
},[orders])

const removeOrder = (id) => {
  const ordersFiltered = orders.filter(order => order.id !== id)
  setOrders(ordersFiltered)
}


  const handleModal = (modal) => {
    if (orders.length > 0) {
      modalRef.current.style.setProperty("display", "block");
    }
  };
  handleModal();

  const closeModal = () => {
    modalRef.current.style.setProperty("display", "none");
    orders.length = 0;
  };

  return (
    <div>
      <div className={styles.order_details}>
        <form ref={modalRef} className={styles.form_order}>
          <h2>Comanda</h2>
         <FaWindowClose className={styles.close_modal} onClick={closeModal} />
          <div className={styles.box_order}>
            {orders &&
              orders.map((order) => (
                <div className={styles.order} key={order.id}>
                  <p>{order.name}</p>
                  <p>R${order.price}</p>
                  <MdRemoveCircle onClick={()=>removeOrder(order.id)} className={styles.remove_order}/>
                </div>
              ))}
          </div>
             <h2>Valor total: <span>R${valueTotalOrder}</span></h2>
          <button className={styles.btn_order}>Fazer pedido</button>
        </form>
      </div>
    </div>
  );
};

export default ModalOrder;
