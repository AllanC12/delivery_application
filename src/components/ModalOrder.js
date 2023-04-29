import styles from "./sass_components/ModalOrder.module.scss";

import { useState } from "react";

const ModalOrder = () => {

  const [orders,setOrder] = useState([
   {id: 1, name: "Refrigerante", price: "R$10.90"}
  ])

  return (
    <div>
      <div className={styles.order_details}>
        <form className={styles.form_order}>
          <h2>Comanda</h2>
          <div className={styles.box_order}>
             {orders.map(order => (
               <>
                 <span>{order.name}</span>
                 <span>{order.price}</span>
               </>
             ))}
          </div>
        <button className={styles.btn_order}>Fazer pedido</button>
        </form>
      </div>
    </div>
  );
};

export default ModalOrder;
