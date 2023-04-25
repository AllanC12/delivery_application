import React from 'react'

const MenuStructure = ({titleFood,priceFood}) => {
  return (
    <div>
       <div>
          <h4>{titleFood}</h4>
          <h4>{priceFood}</h4>
       </div>
    </div>
  )
}

export default MenuStructure