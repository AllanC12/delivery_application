import styles from "./sass_pages/FormClient.module.scss" 

const FormClient = () => {
  return (
    <div className={styles.banner_main}>
         <form>
             <label>
                 <span>Nome:</span>
                 <input type="text" placeholder="Insira seu nome..."/>
             </label>

             <label>
                 <span>Senha:</span>
                 <input type="password" placeholder="Insira sua senha..."/>
             </label>
         </form>
     </div>
  )
}

export default FormClient