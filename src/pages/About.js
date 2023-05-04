import Navbar from "../components/Navbar.js"

const About = () => {
  const adressBanner = "https://vinicolaaraucaria.com.br/wp-content/uploads/2020/06/interna_restaurante-1-1400x700.jpg"
  return (
    <div>
       <Navbar/>
       <main>
          <img src={adressBanner}/>
       </main>
    </div>
  )
}

export default About