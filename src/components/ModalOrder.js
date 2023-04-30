import styles from "./sass_components/ModalOrder.module.scss";

import { useState, useRef, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";

const ModalOrder = ({ orders }) => {
  const modalRef = useRef();

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
          <h2>Comanda</h2> <FaWindowClose onClick={closeModal} />
          <div className={styles.box_order}>
            {orders &&
              orders.map((order) => (
                <div className={styles.order} key={order.id}>
                  <p>{order.name}</p>
                  <p>{order.price}</p>
                </div>
              ))}
          </div>
          <button className={styles.btn_order}>Fazer pedido</button>
        </form>
      </div>
    </div>
  );
};

export default ModalOrder;
