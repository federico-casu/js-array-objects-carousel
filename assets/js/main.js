/* ----------------------------------------------------------------------

Consegna:

Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0: (OK)
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1: (OK)
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2: (OK)
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1: 
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

---------------------------------------------------------------------- */

const arrayImmagini = [
    {
        'url': 'https://picsum.photos/id/254/600/400',
        'title': 'Image 1',
        'description': 'Random image number 1 from Lorem Picsum.. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eaque magnam assumenda sequi iste, molestiae nostrum dicta dolores voluptatum! Dicta doloremque omnis tempora, fugiat facere similique quae expedita corrupti harum.'
    },
    {
        'url': 'https://picsum.photos/id/365/600/400',
        'title': 'Image 2',
        'description': 'Random image number 2 from Lorem Picsum.. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eaque magnam assumenda sequi iste, molestiae nostrum dicta dolores voluptatum! Dicta doloremque omnis tempora, fugiat facere similique quae expedita corrupti harum.'
    },
    {
        'url': 'https://picsum.photos/id/142/600/400',
        'title': 'Image 3',
        'description': 'Random image number 3 from Lorem Picsum.. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eaque magnam assumenda sequi iste, molestiae nostrum dicta dolores voluptatum! Dicta doloremque omnis tempora, fugiat facere similique quae expedita corrupti harum.'
    },
    {
        'url': 'https://picsum.photos/id/535/600/400',
        'title': 'Image 4',
        'description': 'Random image number 4 from Lorem Picsum.. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eaque magnam assumenda sequi iste, molestiae nostrum dicta dolores voluptatum! Dicta doloremque omnis tempora, fugiat facere similique quae expedita corrupti harum.'
    },
    {
        'url': 'https://picsum.photos/id/113/600/400',
        'title': 'Image 5',
        'description': 'Random image number 5 from Lorem Picsum.. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eaque magnam assumenda sequi iste, molestiae nostrum dicta dolores voluptatum! Dicta doloremque omnis tempora, fugiat facere similique quae expedita corrupti harum.'
    },
    {
        'url': 'https://picsum.photos/id/266/600/400',
        'title': 'Image 6',
        'description': 'Random image number 6 from Lorem Picsum.. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eaque magnam assumenda sequi iste, molestiae nostrum dicta dolores voluptatum! Dicta doloremque omnis tempora, fugiat facere similique quae expedita corrupti harum.'
    }
];

const frameSubjectHtml = document.querySelector('figure.frame img');
const arrowLeft = document.querySelector('i.fa-circle-chevron-left');
const arrowRight = document.querySelector('i.fa-circle-chevron-right');
const imgTitleHtml = document.getElementById('imgTitle');
const imgDescriptionHtml = document.getElementById('imgDescription');

// aggiungo a ciascun oggetto dell'array una nuova proprietà chiamata active
arrayImmagini.forEach(element => element.active = 'false');
arrayImmagini[0].active = 'true';

const isActive = (element) => element.active === 'true';

frameSubjectHtml.setAttribute('src', `${arrayImmagini[0].url}`);
imgTitleHtml.innerText = `${arrayImmagini[0].title}`;
imgDescriptionHtml.innerText = `${arrayImmagini[0].description}`;

arrowRight.addEventListener('click', () => {
    const activeIndex = arrayImmagini.findIndex(isActive);

    if ( activeIndex === arrayImmagini.length-1) {
        arrayImmagini[activeIndex].active = 'false';
        arrayImmagini[0].active = 'true';
        frameSubjectHtml.setAttribute('src', `${arrayImmagini[0].url}`);
        imgTitleHtml.innerText = `${arrayImmagini[0].title}`;
        imgDescriptionHtml.innerText = `${arrayImmagini[0].description}`;
    } else {
        arrayImmagini[activeIndex].active = 'false';
        arrayImmagini[activeIndex+1].active = 'true';
        frameSubjectHtml.setAttribute('src', `${arrayImmagini[activeIndex+1].url}`);
        imgTitleHtml.innerText = `${arrayImmagini[activeIndex+1].title}`;
        imgDescriptionHtml.innerText = `${arrayImmagini[activeIndex+1].description}`; 
    }
});

arrowLeft.addEventListener('click', () => {
    const activeIndex = arrayImmagini.findIndex(isActive);

    if ( activeIndex === 0) {
        arrayImmagini[activeIndex].active = 'false';
        arrayImmagini[arrayImmagini.length-1].active = 'true';
        frameSubjectHtml.setAttribute('src', `${arrayImmagini[arrayImmagini.length-1].url}`);
        imgTitleHtml.innerText = `${arrayImmagini[arrayImmagini.length-1].title}`;
        imgDescriptionHtml.innerText = `${arrayImmagini[arrayImmagini.length-1].description}`;
    } else {
        arrayImmagini[activeIndex].active = 'false';
        arrayImmagini[activeIndex-1].active = 'true';
        frameSubjectHtml.setAttribute('src', `${arrayImmagini[activeIndex-1].url}`);
        imgTitleHtml.innerText = `${arrayImmagini[activeIndex-1].title}`;
        imgDescriptionHtml.innerText = `${arrayImmagini[activeIndex-1].description}`; 
    }
});

