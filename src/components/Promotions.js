import styles from './sass_components/Promotions.scss'

const Promotions = () => {
  const promotionPizza = "https://i.pinimg.com/originals/87/e2/bc/87e2bc70ba766ac7cc9ecd0e82dc8560.jpg"
  const promotionBeer = "https://www.designi.com.br/images/preview/10001542.jpg" 
  const promotionFood = "https://restauranteportal.com.br/admin/arquivos/servicos/thumb_promocoes1000x1000jantarcasal-5899.jpg"
  return (
    <div className="promotions">
        <div className="header_promotions">
            <div className="line"></div>
            <h2>Nossas promoções</h2>
            <div className="line"></div>
        </div>
        <div className="img_promotions">
           <img src={promotionFood} alt="promoção de jantar" />
           <img src={promotionBeer} alt="promoção de bebida" />
           <img src={promotionPizza} alt="promoção de pizza" />
        </div>
   </div>
  )
}

export default Promotions