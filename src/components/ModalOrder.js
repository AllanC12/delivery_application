import styles from "./sass_components/ModalOrder.module.scss";

import { useEffect, useRef } from "react";


const ModalOrder = ({ titleOrder, priceOrder }) => {
  const boxOrder= useRef();

  const addOrder = () => {
    boxOrder.current.prepend(titleOrder,priceOrder)
  }


  useEffect(() => {
     addOrder()
  }, [titleOrder, priceOrder]);

  return (
    <div>
      <div className={styles.order_details}>
        <h2>Comanda</h2>
        <form className={styles.form_order}>
          <div ref={boxOrder} className={styles.box_order}>
            <span>{titleOrder}</span>
            <span>{priceOrder}</span>
            <span>Qtd:</span>
            <input type="number" defaultValue={1} min={1} />
          </div>
        </form>
        <button className={styles.btn_order}>Fazer pedido</button>
      </div>
    </div>
  );
};

export default ModalOrder;
