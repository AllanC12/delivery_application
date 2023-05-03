import styles from "./sass_components/ModalOrder.module.scss";

import { useState, useRef, useEffect } from "react";

import DraggableComponent from "./DraggableComponent";

import { FaWindowClose } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";

const ModalOrder = ({ orders, setOrders }) => {
  const modalRef = useRef();
  const [valueTotalOrder, setValueTotalOrder] = useState("");
  const [messageOrder, setMessageOrder] = useState("");
  const adressWhatapp = `https://wa.me/+5537988383824?text=${messageOrder}`;
  const btnSendOrder = useRef()

  const sumOrder = () => {
    let valueOrder = orders.map((order) => parseFloat(order.price));

    let sumValueOrder = valueOrder.reduce((accumulator, index) => {
      return accumulator + index;
    }, 0);

    setValueTotalOrder(sumValueOrder.toFixed(2));
  };

  useEffect(() => {
    sumOrder();
  }, [orders]);

  const removeOrder = (id) => {
    const ordersFiltered = orders.filter((order) => order.id !== id);
    setOrders(ordersFiltered);
  };

  const handleModal = () => {
    if (orders.length > 0) {
      modalRef.current.style.setProperty("display", "block");
    }
  };
  handleModal();

  const closeModal = () => {
    modalRef.current.style.setProperty("display", "none");
    orders.length = 0;
  };

  const sendOrder = () => {
    const ocurrencesOrder = {};

    orders.map((order) => {
      if (ocurrencesOrder[order.name]) {
        ocurrencesOrder[order.name]++;
      } else {
        ocurrencesOrder[order.name] = 1;
      }
    });

    

    const quantityOrder = Object.values(ocurrencesOrder);
    const nameOrder = Object.keys(ocurrencesOrder);

    const arrayBuildOrders = quantityOrder.reduce((acc, value, index) => {
      acc.push(value, nameOrder[index]);
      return acc;
    }, []);

    const arrayOrders = arrayBuildOrders.reduce((accumulator, current, index) => {
        if (index % 2 === 0) {
          accumulator.push(current);
        } else {
          accumulator.push(accumulator.pop() + " " + current);
        }
        return accumulator;
      },[]);

      const messageOrders = arrayOrders.join(", ")

      setMessageOrder(`Olá, gostaria de fazer os seguintes pedidos: ${messageOrders}. 
       Confirme para mim o valor do pedido em R$${valueTotalOrder}.
      `)
  };

  return (
    <DraggableComponent>
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
                  <MdRemoveCircle
                    onClick={() => removeOrder(order.id)}
                    className={styles.remove_order}
                  />
                </div>
              ))}
          </div>
          <h2>
            Valor total: <span>R${valueTotalOrder}</span>
          </h2>
             <a ref={btnSendOrder} onClick={sendOrder} className={styles.btn_order} target="_blank" href={adressWhatapp}>
              Fazer pedido
            </a>
         </form>
      </div>
    </DraggableComponent>
  );
};

export default ModalOrder;
