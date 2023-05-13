import "./sass_components/MenuStructure.scss";

const MenuStructure = ({ titleFood, priceFood, setOrders }) => {
  //Função que monta os pedidos do cliente
  const addOrders = (e) => {
    const titleOrder = e.target.children[0].innerText;
    const priceOrder = e.target.children[1].innerText.split("$")[1];

    const order = {
      id: Math.random(),
      name: titleOrder,
      price: priceOrder,
    };

    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <div>
      <div
        onClick={(e) => { 
           if(!e.target.children[0] || !e.target.children[1]) return  
           addOrders(e);
         }}
        className="boxFood"
      >
        <h4>{titleFood}</h4>
        <h4>
          <span>R$</span>
          {priceFood}
        </h4>
      </div>
    </div>
  );
};

export default MenuStructure;
