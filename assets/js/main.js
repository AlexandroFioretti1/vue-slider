/* 
Descrizione:
Partendo dal markup della versione svolta in js plain
rifare lo slider ma questa volta usando Vue.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce.
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      imgActive: 0,
      images: {
        title: [
          "spiderman",
          "Ratchet & Clank",
          "Fortnite",
          "Stray",
          "avengers",
        ],
        description: [
          "Spider-Man in realtà è Peter Parker è un giovane brillante con la passione per la fotografia che viene morso da un ragno radioattivo (le circostanze cambiano in base ai film e alle versioni dei vari fumetti) e assume super-poteri come una forza sovrumana e la capacità di arrampicarsi sui muri.",
          "Ratchet & Clank è una serie di videogiochi platform-adventure sviluppati da Insomniac Games e pubblicati da Sony Computer Entertainment.",
          "Fortnite è un videogioco sparatutto in terza persona del 2017, sviluppato da People Can Fly e pubblicato da Epic Games per console e PC. Il gioco presenta tre modalità distinte che condividono lo stesso motore grafico: Salva il mondo, Modalità creativa e Battaglia reale.",
          "Perso, solo e lontano dalla famiglia, un gatto randagio deve svelare un antico mistero per fuggire da una città dimenticata. Stray è un gioco di avventura felina in terza persona ambientato in una cybercittà degradata, tra dettagliati vicoli illuminati al neon e squallidi scenari avvolti nell'oscurità.",
          "Riunisci la squadra dei più forti eroi della Terra, scatena i tuoi poteri e vivi il tuo sogno di supereroe. Marvel's Avengers è un epico gioco di azione-avventura in terza persona che combina una narrazione cinematografica e originale con meccaniche di gioco in solitario e cooperativo.",
        ],
        imagePath: [
          "./assets/img/01.webp",
          "./assets/img/02.webp",
          "./assets/img/03.webp",
          "./assets/img/04.webp",
          "./assets/img/05.webp",
        ],
      },
    };
  },
  methods: {
    prev() {
      this.imgActive--;
      if (this.imgActive < 0) {
        this.imgActive = this.images.imagePath.length - 1;
        console.log(next);
      }
    },
    next() {
      this.imgActive++;
      if (this.imgActive === this.images.imagePath.length) {
        this.imgActive = 0;
        console.log(prev);
      }
    },
    click(index) {
      this.imgActive = index;
    },
  },
  mounted() {
    const autoplay = setInterval(() => {
      this.next();
    }, 3000);
  },
}).mount("#app");
