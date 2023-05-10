import styles from './sass_components/Promotions.module.scss'

const Promotions = () => {
  return (
    <div className={styles.promotions}>
        <div className={styles.header_promotions}>
            <div className={styles.line}></div>
            <h2>Nossas promoções</h2>
            <div className={styles.line}></div>
        </div>
   </div>
  )
}

export default Promotions