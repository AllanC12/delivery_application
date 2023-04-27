import styles from "./sass_components/ModalOrder.module.scss";

const ModalOrder = ({titleOrder,priceOrder}) => {
  return (
    <div className={styles.modal}>
        <div className={styles.order_details}>
        <h2>Nome do pedido</h2>
            <form>
                <label>
                    Quantidade:
                    <input type="number" />
                </label>
                <p>Descrição do produto:</p>
                <h2>Valor total: <span>Valor</span></h2>
            </form>
        </div>
    </div>
  )
}

export default ModalOrder