/* ----------------------------------------------------------------------

Consegna:

Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
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
        'description': 'Random image number 1 from Lorem Picsum..'
    },
    {
        'url': 'https://picsum.photos/id/365/600/400',
        'title': 'Image 2',
        'description': 'Random image number 2 from Lorem Picsum..'
    },
    {
        'url': 'https://picsum.photos/id/142/600/400',
        'title': 'Image 3',
        'description': 'Random image number 3 from Lorem Picsum..'
    },
    {
        'url': 'https://picsum.photos/id/535/600/400',
        'title': 'Image 4',
        'description': 'Random image number 4 from Lorem Picsum..'
    },
    {
        'url': 'https://picsum.photos/id/113/600/400',
        'title': 'Image 5',
        'description': 'Random image number 5 from Lorem Picsum..'
    },
    {
        'url': 'https://picsum.photos/id/266/600/400',
        'title': 'Image 6',
        'description': 'Random image number 6 from Lorem Picsum..'
    }
];

const frameSubjectHtml = document.querySelector('figure.frame img');
const arrowLeft = document.querySelector('i.fa-circle-chevron-left');
const arrowRight = document.querySelector('i.fa-circle-chevron-right');

console.log(arrowLeft);
console.log(arrowRight);

console.log(frameSubjectHtml);

frameSubjectHtml.setAttribute('src', `${arrayImmagini[0].url}`);

arrowRight.addEventListener('click', () => {
    
});

arrowLeft.addEventListener('click', () => {
    
});

