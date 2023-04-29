import styles from "./sass_components/MenuStructure.module.scss"

 
const MenuStructure = ({titleFood,priceFood,setTitleOrder,setPriceOrder}) => {
 
  const defineDetailsOrder = (titleOrder,priceOrder) => {
    setTitleOrder(titleOrder)
    setPriceOrder(priceOrder)
  }

  return (
    <div>
       <div 
          onClick={(e)=> defineDetailsOrder(e.target.children[0].innerText,e.target.children[1].innerText)}
          className={styles.boxFood}
         > 
          <h4>{titleFood}</h4>
          <h4>{priceFood}</h4>
        </div>
    </div>
  )
} 

export default MenuStructure