import styles from "./sass_components/MenuStructure.module.scss"

const MenuStructure = ({titleFood,priceFood}) => {
  return (
    <div>
       <div className={styles.boxFood}>
          <h4>{titleFood}</h4>
          <h4>{priceFood}</h4>
        </div>
    </div>
  )
}

export default MenuStructure