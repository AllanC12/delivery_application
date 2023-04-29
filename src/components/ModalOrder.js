import styles from "./sass_components/ModalOrder.module.scss";

import { useRef } from "react";

import Order from "./Order";

const ModalOrder = ({titleOrder,priceOrder}) => {

  const modalRef = useRef()
  let posX, posY = 0;

  const handleDragStart = (event) => {
    console.log('arrastado')
    event.dataTransfer.setData('text/plain', '');
    event.dataTransfer.effectAllowed = 'move';
  };

  
  const onDragOver = (e) => {
    posX = e.pageX
    posY = e.pageY
    modalRef.current.style.setProperty("left",`${posX}px`)
    modalRef.current.style.setProperty("top",`${posY}px`) 
  }

  const onDragEnd = () => {

    console.log("caido")
  }


   return (
    <div
     ref={modalRef}
     draggable="true"
     onDragStart={handleDragStart}
     onDragOver={onDragOver}
     onDragEnd={onDragEnd}
       >
        <div className={styles.order_details}>
            <form className={styles.form_order}>
                <h2>Comanda</h2>
                 <Order titleOrder={titleOrder} priceOrder={priceOrder} />
                <button className={styles.btn_order}>Fazer pedido</button>
            </form>
        </div>
    </div>
  )
}

export default ModalOrder