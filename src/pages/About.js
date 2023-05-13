import "./sass_pages/About.scss";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

const About = () => {
  const adressBanner = "https://vinicolaaraucaria.com.br/wp-content/uploads/2020/06/interna_restaurante-1-1400x700.jpg";

  const adressProfilePhoto = ["https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/07/site-vacinacao-33-anos.png",
"https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/site-vacinacao-26-anos.png",
"https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png"
  ]

  return (
    <div>
      <Navbar />
      <main>
        <img className="banner_about" src={adressBanner} />
        <div className="box_about">

          <div className="about box_single">
            <h2>Um pouco sobre nós</h2>
            <p>
              Há alguns anos, uma cozinheira apaixonada pela culinária
              brasileira decidiu realizar seu sonho de abrir um restaurante que
              oferecesse pratos típicos de todas as regiões do país. Ela passou
              meses pesquisando e experimentando receitas, até que finalmente
              encontrou a combinação perfeita de sabores para cada prato. Com a
              ajuda de sua família, ela alugou um pequeno espaço no centro da
              cidade e começou a trabalhar duro para transformar o local em um
              ambiente acolhedor e agradável. O restaurante "Sabores do Brasil"
              nasceu assim, com muito amor, dedicação e sabor. O restaurante
              logo se tornou um sucesso, com clientes vindo de toda a cidade
              para experimentar os pratos deliciosos e autênticos. A cozinheira,
              agora dona do estabelecimento, contratou mais funcionários e
              ampliou o cardápio para atender a demanda crescente. Hoje, o
              "Sabores do Brasil" é um dos restaurantes mais populares da
              região, conhecido por seus pratos saborosos e autênticos, além do
              ambiente aconchegante e acolhedor que conquista a todos que o
              visitam.
            </p>
          </div>

          <div className="cuisine box_single">
            <h2>Nossa inspirações</h2>
            <ul>
              <li>
                Culinária nordestina: conhecida por pratos como o acarajé,
                moqueca de camarão, feijoada nordestina, carne-de-sol, tapioca,
                entre outros.
              </li>
              <li>
                Culinária mineira: destaca-se pela variedade de pratos com
                ingredientes como feijão, arroz, mandioca, carne de porco,
                queijo e doces como o doce de leite e o queijo minas.
              </li>
              <li>
                Culinária baiana: muito conhecida pela mistura de sabores como o
                dendê, o leite de coco, pimenta e frutos do mar, que resultam em
                pratos como o vatapá, caruru e bobó de camarão.
              </li>
              <li>
                Culinária paulista: destaca-se pela variedade de pratos como a
                famosa pizza, o virado à paulista, a coxinha e a feijoada
                paulista.
              </li>
              <li>
                Culinária gaúcha: a tradicional churrascaria é o ponto forte
                dessa culinária, mas também é possível encontrar pratos típicos
                como o arroz de carreteiro e o sagu.
              </li>
            </ul>
          </div>

          <div className="testimonials box_single">

            <div className="box_testimonials">
              <div className="header_testimonial">
                <img src={adressProfilePhoto[0]} className="profile_testimonial" />
                <h4>Ana Paula</h4>
              </div>
              <p>
                "Amei o restaurante Sabores do Brasil! Os pratos são muito bem
                preparados e deliciosos. Sempre que posso, venho saborear a
                feijoada nordestina que é divina!"
              </p>
            </div>

            <div className="box_testimonials">
              <div className="header_testimonial">
                <img src={adressProfilePhoto[1]} className="profile_testimonial" />
                <h4>João Carlos</h4>
              </div>
              <p>
                "O Sabores do Brasil é o meu restaurante favorito! A comida é
                incrível e o atendimento é excelente. O escondidinho de carne
                seca é simplesmente maravilhoso!"
              </p>
            </div>

            <div className="box_testimonials">
              <div className="header_testimonial" > 
                <img src={adressProfilePhoto[2]} className="profile_testimonial" />
                <h4>Fernanda Oliveira</h4>
              </div>
              <p>
                "Eu e minha família adoramos o Sabores do Brasil. Os pratos são
                muito bem servidos e a decoração do ambiente é super
                aconchegante. O bobó de camarão é um dos melhores que já
                experimentamos!"
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
