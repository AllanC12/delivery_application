import styles from "./sass_components/ModalOrder.module.scss";

const ModalOrder = ({titleOrder,priceOrder}) => {
  return (
    <div className={styles.modal}>
        <div className={styles.order_details}>
            <form>
            <h2>Nome do pedido</h2>
                <label>
                    Quantidade:
                    <input type="number" min={1}/>
                </label>
                <p>Descrição do pedido:</p>
                <h2>Valor total: <span>Valor</span></h2>
                <button className={styles.btn_order}>Fazer pedido</button>
            </form>
        </div>
    </div>
  )
}

export default ModalOrder