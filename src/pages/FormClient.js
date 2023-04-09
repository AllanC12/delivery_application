import styles from "./sass_pages/FormClient.module.scss" 
import { Link } from "react-router-dom"
const FormClient = () => {
  return (
    <div className={styles.banner_main}>
         <form className={styles.form_login}>
             <h2>A fome bateu? Entre aqui e sirva-se</h2>
             <label>
                  <input type="text" placeholder="Insira seu nome..."/>
             </label>

             <label>
                  <input type="password" placeholder="Insira sua senha..."/>
             </label>

             <input className="btn" type="submit" value="Enviar" />
             
             <Link to="/cadastro">Se é novato então clica aqui!</Link>

         </form>
     </div>
  )
}

export default FormClient