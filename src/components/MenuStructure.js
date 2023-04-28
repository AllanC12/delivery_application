import styles from "./sass_components/MenuStructure.module.scss"

import ModalOrder from "./ModalOrder"

const MenuStructure = ({titleFood,priceFood}) => {

const defineOrder = (titleOrder,priceOrder) => {
  <ModalOrder titleOrder={titleOrder} priceOrder={priceOrder}/>
  console.log(titleOrder)
}

  return (
    <div>
       <div onClick={(e)=> defineOrder(e.target.children[0].innerText,e.target.children[1].innerText)} 
       className={styles.boxFood}>
          <h4>{titleFood}</h4>
          <h4>{priceFood}</h4>
        </div>
    </div>
  )
}

export default MenuStructure