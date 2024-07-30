const express = require('express')
const app = express()
const port = 3000

const anime = [
  {
    id: 101,
    name: "Shingeki no Kyojin",
    classification: "13+ (PG-13)",
    gender: " Shounen,  Aventura, Accion, Militar",
    protagonist: "Eren Jaeger",
    Photography:
      "https://cdn.shopify.com/s/files/1/0589/3065/9477/files/eren-jaeger-apariencia-humano_480x480.png?v=1632086682",
    information:
      "La historia nos traslada a un mundo en el que la humanidad estuvo a punto de ser exterminada cientos de años atrás por los Titanes. Los Titanes son seres enormes, parecen no ser inteligentes y devoran humanos. Eren y Mikasa son todavía adolescentes cuando ven a un Titan mas grande que todos los conocidos hasta ahora y está destruyendo los muros de la ciudad, en ese momento la humanidad volverá a recordar el terror.",
  },
  {
    id: 102,
    name: "Sword Art Online",
    classification: "13+ (PG-13)",
    gender: "Acción, Aventura, Romance, Videojuegos",
    protagonist: "Kazuto Kirigaya (Kirito)",
    Photography:
      "https://static.wikia.nocookie.net/death-battle-fanon-wiki-en-espanol/images/2/20/Kirito.png/revision/latest?cb=20190703030255&path-prefix=es",
    information: ` ambientada en el año 2022 donde la realidad virtual ha progresado mucho. Existe un nuevo juego de rol masivo, llamado Sword Art Online (SAO). Gracias a la tecnología “NerveGear”, los jugadores pueden controlar los avatares utilizando sus pensamientos, 
    Todo va bien hasta que todos notan que no pueden salir, ya que el creador del juego los ha atrapado en el juego hasta que completen los 100 niveles.`,
  },
  {
    id: 103,
    name: "Tensei Shitara Slime Datta Ken",
    classification: " TODO PUBLICO(G)",
    gender: "Isekai, Shounen, Aventura, Fantasía",
    protagonist: "Rimuru Tempest (Satoru Mikami)",
    Photography:
      "https://static.wikia.nocookie.net/doblaje/images/d/de/Rimuru-tempest_orig.png/revision/latest?cb=20210713175705&path-prefix=es",
    information: `El solitario Satoru Mikami de treinta y siete años está atascado en un trabajo sin futuro y descontento con su vida mundana, pero después de morir a manos de un ladrón, despierta un nuevo comienzo en un reino de fantasía... como un monstruo de Slime?!
Mientras se aclimata a su nueva existencia, sus hazañas con los otros monstruos desencadenan una serie de eventos que cambiarán su nuevo mundo para siempre.`,
  },
  {
    id: 104,
    name: "Ao Haru Ride",
    classification: " TODO PUBLICO(G)",
    gender: "Shoujo, Drama, Comedia, Romance, Colegial",
    protagonist: "Kou Mabuchi",
    Photography:
      "https://static.wikia.nocookie.net/manga/images/c/ce/Kou_Mabuchi.png/revision/latest?cb=20140828140510&path-prefix=es",
    information:
      " Ao Haru Ride es un anime de romance y drama que sigue la historia de Futaba Yoshioka, una estudiante de secundaria que busca reinventarse después de un cambio de escuela. En su nuevo colegio, se reencuentra con Kou Tanaka, un amigo de la infancia que ha cambiado mucho desde que se separaron. A medida que pasan el tiempo juntos, Futaba se da cuenta de que aún tiene sentimientos por Kou, pero él parece haber cambiado y ya no es el mismo chico que conoció antes. La serie explora temas como el amor, la amistad, los cambios en la vida y el crecimiento personal.",
  },
  {
    id: 105,
    name: "Beastars",
    classification: "17+ (R)",
    gender: "Shounen, Psicologico, Drama, Misterio, Romance",
    protagonist: "Legoshi",
    Photography:
      "https://static.wikia.nocookie.net/beastars-eng/images/8/87/Legoshi_%28Anime%29_S2.png/revision/latest/scale-to-width/360?cb=20201018234543",
    information:
      "Nos encontramos en un mundo donde los animales antropomórficos coexisten y se dividen en herbívoros y carnívoros. La historia sigue a Legoshi, un lobo y estudiante de secundaria, quien se convierte en el objetivo de los rumores y el temor de sus compañeros de clase después de un incidente en el que un estudiante es asesinado. Legoshi debe navegar por sus propios instintos y sentimientos mientras intenta descubrir al asesino y encontrar su lugar en el mundo. A medida que se desarrolla la trama, se exploran temas como la identidad, la moralidad, la sociedad y las relaciones personales, todo ello con un toque de misterio y romance.",
  },

  {
    id: 106,
    name: "Toradora!",
    classification: "14+",
    gender: "Romance, Comedia, Drama",
    protagonist: "Aisaka Taiga",
    Photography:
      "https://static.wikia.nocookie.net/wikiseriesjaponesas/images/6/6a/Taiga-aisaka-aisaka-taiga-22553897-382-600.jpg/revision/latest/scale-to-width-down/382?cb=20160713233033&path-prefix=es",
    information:
      "Ryūji Takasu y Taiga Aisaka, dos estudiantes de secundaria, se unen para ayudarse mutuamente a confesar sus sentimientos a sus respectivos amores, pero a medida que pasan más tiempo juntos, sus sentimientos comienzan a cambiar.",
  },
  {
    id: 107,
    name: "Shigatsu wa Kimi no Uso",
    classification: "14+",
    gender: "Romance, Drama, Música",
    protagonist: "Arima Kousei",
    Photography:
      "https://static.wikia.nocookie.net/manga/images/f/f0/Kousei_Arima.png/revision/latest?cb=20150228042819&path-prefix=es",
    information:
      "Arima Kousei, un pianista que perdió la pasión por la música después de la muerte de su madre, se encuentra con Miyazono Kaori, una violinista apasionada que lo inspira a volver a tocar y a encontrar su propósito en la vida.",
  },

  {
    id: 108,
    name: "Tokyo Ghoul",
    classification: "+18 (Madurez, violencia, temas oscuros)",
    gender: "Acción, Drama, Horror, Supernatural",
    protagonist: " Ken Kaneki",
    Photography:
      "https://static.wikia.nocookie.net/tokyo-ghoul-la/images/7/7c/Traje_de_Combate_de_Kaneki_Aogiri.png/revision/latest/scale-to-width-down/250?cb=20180921013323&path-prefix=es",
    information:
      "Ken Kaneki, un joven universitario, se convierte en un híbrido de humano y ghoul después de un trágico accidente, y debe navegar por un mundo donde los ghouls son perseguidos por los humanos.",
  },
  {
    id: 109,
    name: "Fullmetal Alchemist",
    classification: "+14",
    gender: "Acción, Aventura, Fantasía, Drama",
    protagonist: "Edward Elric",
    Photography:
      "https://static.wikia.nocookie.net/doblaje/images/1/19/Edward_Elric.png/revision/latest?cb=20190709041157&path-prefix=es",
    information:
      "Edward Elric, un joven alquimista, busca la Piedra Filosofal para restaurar su cuerpo y el de su hermano después de un experimento fallido.",
  },

  {
    id: 110,
    name: "Death Note",
    classification: "+16",
    gender: "Misterio, Thriller, Psicológico",
    protagonist: "Light Yagami",
    Photography:
      "https://static.wikia.nocookie.net/deathnote/images/5/5b/Light-Yagami-image-light-yagami-36448734-1280-1685.png/revision/latest?cb=20170620110205&path-prefix=es",
    information:
      "Light Yagami, un estudiante de secundaria, encuentra un cuaderno que puede matar a cualquier persona cuyo nombre se escriba en él, y decide utilizarlo para crear un mundo sin crimen, mientras es perseguido por un detective genial conocido como L",
  },
  {
    id: 111,
    name: "Shokugeki no Souma",
    classification: "Comedia, Drama, Cocina",
    gender: "+16",
    protagonist: "Souma Yukihira",
    Photography:
      "https://i.pinimg.com/originals/0c/73/40/0c73408b67f27b15478064ff5daf2f63.png",
    information: `Souma Yukihira, un joven apasionado por la cocina, se inscribe en la prestigiosa escuela culinaria Totsuki, donde debe competir contra los mejores chefs jóvenes del país en desafiantes "shokugekis" para demostrar su habilidad y creatividad en la cocina.`
  },
];

app.get("/anime/id", (req, res) => {
  const animeId = parseInt(req.params.id);
  const animes = anime.find((p) => p.id === animeId);
  //   if (product) {
  //     res.json(product);
  //   } else {
  //     res.status(404).json({ message: "Product not found" });
  //   }
  animes
    ? res.json(animes)
    : res.status(404).json({ message: "Product not found" });
});
app.get("/anime/", (req, res) => {
  const animeId = parseInt(req.params.id);
  const animes = anime.find((p) => p.id === animeId);
  //   if (product) {
  //     res.json(product);
  //   } else {
  //     res.status(404).json({ message: "Product not found" });
  //   }
  animes
    ? res.json(animes)
    : res.status(404).json({ message: "Product not found" });
});
 app.get("/anime", (req, res) => {
res.json(anime);
 });



  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  
