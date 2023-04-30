import styles from "./sass_components/ModalOrder.module.scss";

import { useState,useRef, useEffect } from "react";

import { FaWindowClose } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md"

const ModalOrder = ({ orders }) => {
  const modalRef = useRef();
  const [valueTotalOrder,setValueTotalOrder] = useState("R$45,50")

  const sumValueOrder = () => {
    
  }

useEffect(()=>{
  sumValueOrder()
},[orders])
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
          <h2>Comanda</h2> <FaWindowClose className={styles.close_modal} onClick={closeModal} />
          <div className={styles.box_order}>
            {orders &&
              orders.map((order) => (
                <div className={styles.order} key={order.id}>
                  <p>{order.name}</p>
                  <p>{order.price}</p>
                  <MdRemoveCircle className={styles.remove_order}/>
                </div>
              ))}
             <h3>Valor total: <span>{valueTotalOrder}</span></h3>
          </div>
          <button className={styles.btn_order}>Fazer pedido</button>
        </form>
      </div>
    </div>
  );
};

export default ModalOrder;
