import styles from "./sass_components/MenuStructure.module.scss"

  
const MenuStructure = ({titleFood,priceFood,setOrders}) => {

 const addOrders = (titleOrder,priceOrder) => {
    const order = {
      id: Math.random(),
      name:titleOrder,
      price:priceOrder
    }

    setOrders(prevOrders => [...prevOrders ,order])
 }

  return (
    <div>
       <div onClick={(e)=> addOrders(
          e.target.children[0].innerText
        , e.target.children[1].innerText.split("$")[1]
        )} className={styles.boxFood}> 
          <h4>{titleFood}</h4>
          <h4><span>R$</span>{priceFood}</h4>
        </div>
    </div>
  )
} 

export default MenuStructure