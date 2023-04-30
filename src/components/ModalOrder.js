import styles from "./sass_components/ModalOrder.module.scss";

import { useRef } from "react";

const ModalOrder = ({orders}) => {
  let modalOpen = false
  const modalRef = useRef()
  console.log(modalRef.current)

  const handleModal = () => {
    if(orders.length > 0){
      modalOpen = true
    }

    if(modalOpen){
       modalRef.current.style.setProperty("display","block")
    }
  }
  handleModal()

  return (
    <div>
      <div className={styles.order_details}>
        <form ref={modalRef} className={styles.form_order}>
          <h2>Comanda</h2>
          <div className={styles.box_order}>
             {orders && orders.map(order => (
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
