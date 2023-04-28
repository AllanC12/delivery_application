import styles from "./sass_components/ModalOrder.module.scss";

import { useRef } from "react";

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
                <div className={styles.box_oder}>
                    <span>Acarajé: R$25,40</span>
                    <span>Qtd:</span>
                    <input type="number" defaultValue={1} min={1}/>
                </div>
                <button className={styles.btn_order}>Fazer pedido</button>
            </form>
        </div>
    </div>
  )
}

export default ModalOrder