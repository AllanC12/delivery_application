import styles from './sass_components/Order.module.scss'

const Order = ({titleOrder,priceOrder}) => {
  return (
    <div className={styles.box_order}>
    <span>{titleOrder}</span>
    <span>{priceOrder}</span>
    <span>Qtd:</span>
    <input type="number" defaultValue={1} min={1}/>
</div>
  )
}

export default Order