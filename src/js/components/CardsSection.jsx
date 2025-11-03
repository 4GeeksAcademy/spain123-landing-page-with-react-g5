import React from "react";
import Card from './Cards';



const CardSection = () => {
    const cardsData = [
	  {
		title: "Senderismo",
		text: "Explora rutas naturales y respira aire puro en cada paso.",
		img: "https://peaceofmindvalencia.es/wp-content/uploads/2024/11/Senderismo-en-el-Parque-Natural-de-la-Sierra-de-Mariola.jpg"
	  },
	  {
		title: "Escalada",
		text: "Desafía tus límites y conquista nuevas alturas.",
		img: "https://www.manasluadventures.com/wp-content/uploads/2019/09/Escalada-3-2.jpg"
	  },
	  {
		title: "Camping",
		text: "Desconecta del mundo y duerme bajo las estrellas.",
		img: "https://www.klimbercamp.com/images/uploads/campings-galerias/Camping_Bosque_Hermoso_03.jpg"
	  },
	  {
		title: "Kayak",
		text: "Navega por ríos y lagos rodeado de paisajes impresionantes.",
		img: "https://cdn2.civitatis.com/argentina/el-chalten/galeria/big/kayak-rio-vueltas-argentina-america.jpg"
	  },
	  {
		title: "Ciclismo de montaña",
		text: "Recorre terrenos salvajes con adrenalina y libertad.",
		img: "https://mejorconsalud.as.com/wp-content/uploads/2018/10/125845059_m.jpg"
	  },
	  {
		title: "Fotografía de naturaleza",
		text: "Captura momentos únicos en entornos espectaculares.",
		img: "https://blog.naturlider.com/wp-content/uploads/2020/03/AdobeStock_309195144-post-dia-mundial-naturaleza.jpeg"
	  }
	];
    const cards = cardsData.map((card, index) => <Card key={index} title={card.title} text={card.text} img={card.img} />)
    return (
        <section id="cards" className="container">
            {cards}
        </section>
    );
}

export default CardSection;