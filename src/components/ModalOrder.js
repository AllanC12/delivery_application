import "./sass_components/ModalOrder.scss";

import { useState, useRef, useEffect } from "react";

import DraggableComponent from "./DraggableComponent";

import { FaWindowClose } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";

const ModalOrder = ({ orders, setOrders }) => {
  const modalRef = useRef();
  const [valueTotalOrder, setValueTotalOrder] = useState("");
  const [messageOrder, setMessageOrder] = useState("");
  const adressWhatapp = `https://wa.me/+5537988551832?text=${messageOrder}`;
  const ocurrencesOrder = {};

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

  const mapingOrders = () =>{
    orders.map((order) => {
      if (ocurrencesOrder[order.name]) {
        ocurrencesOrder[order.name]++;
      } else {
        ocurrencesOrder[order.name] = 1;
      }
    });
  }

  const buildMessageOrder = () => {
    const quantityOrder = Object.values(ocurrencesOrder);
    const nameOrder = Object.keys(ocurrencesOrder);

    const arrayBuildOrders = quantityOrder.reduce((acc, value, index) => {
      acc.push(value, nameOrder[index]);
      return acc;
    }, []);

    const arrayOrders = arrayBuildOrders.reduce((acc, current, index) => {
        if (index % 2 === 0) {
          acc.push(current);
        } else {
          acc.push(acc.pop() + " " + current);
        }
        return acc;
      },[]);

      const messageOrders = arrayOrders.join(", ")

      setMessageOrder(`Olá, gostaria de fazer os seguintes pedidos: ${messageOrders}. 
       Confirme para mim o valor do pedido em R$${valueTotalOrder}.
      `)
  }

  const sendOrder = (e) => {
    if(orders.length === 0){
      e.preventDefault()
      return
    }

    mapingOrders()
    buildMessageOrder()

  };

  return (
    <DraggableComponent>

      <div className="order_details">
        <form ref={modalRef} className="form_order">
            <h2>Comanda</h2>

            <FaWindowClose className="close_modal" onClick={closeModal} />

            <div className="box_order">
              {orders && orders.map((order) => (
                  <div className="order" key={order.id}>
                    <p>{order.name}</p>
                    <p>R${order.price}</p>
                    <MdRemoveCircle onClick={() => removeOrder(order.id)} className="remove_order"/>
                  </div>
               ))}
            </div>

            <h2>
              Valor total: <span>R${valueTotalOrder}</span>
            </h2>
              <a onClick={(e)=>sendOrder(e)} className="btn_order" target="_blank" href={adressWhatapp}>
                Fazer pedido
              </a>
         </form>
      </div>
    </DraggableComponent>
  );
};

export default ModalOrder;
