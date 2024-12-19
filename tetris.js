/////////////////////////////////////////////////////ELEMENTI////////////////////////////////////////////////////////////////

//Canvas El
const TetrisArea = document.getElementById('Areadigioco');

//Contenuto Canvas
var ELtetris = TetrisArea.getContext('2d');

// Grandezza blocco
var cella = 30;

var yposinizialegriglia = 0;

var valorecasuale = Math.round(Math.random() * 6);

//Stile e posizionamento dell'area di gioco
TetrisArea.style.background = 'red';
TetrisArea.style.position = 'absolute';
TetrisArea.style.top = '50%';
TetrisArea.style.left = '50%';
TetrisArea.style.transform = 'translate(-50%, -50%)';
var noblock = true;
var blockorr = true;


/////////////////////////////////////////////////////////MATRICI////////////////////////////////////////////////////////    
const TetraminoT = {
    forma : [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],

    colore : '#3498db'
}

const TetraminoL = {
    forma : [
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    colore : '#1abc9c'
}

// const TetraminoL = {
//     forma : [
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [1, 1, 1, 1],
//         [0, 0, 0, 1]
//     ],

//     colore : '#1abc9c'
// }

// const TetraminoL = {
//     forma : [
//         [1, 1, 1, 1],
//         [0, 0, 0, 1],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0]
//     ],

//     colore : '#1abc9c'
// }

const TetraminoJ = {
    forma : [
        [0, 0, 0, 1],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],

    colore : '#2ecc71'
}

const TetraminoI = {
    forma : [
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0]
    ],

    colore : '#e74c3c'
}

const TetraminoS = {
    forma : [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],

    colore : '#f1c40f'
}

const TetraminoZ = {
    forma : [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],

    colore : '#e67e22'
}

const TetraminoC = {
    forma : [
        [1, 1],
        [1, 1]
    ],

    colore : '#9b59b6'
}

//Campo di gioco
var MatriceCampo = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//Array contenenti tetramini e colori
var formetetramini = [TetraminoT.forma, TetraminoL.forma, TetraminoJ.forma, TetraminoI.forma, TetraminoS.forma, TetraminoZ.forma, TetraminoC.forma];
var coloretramini = [TetraminoT.colore, TetraminoL.colore, TetraminoJ.colore, TetraminoI.colore, TetraminoS.colore, TetraminoZ.colore, TetraminoC.colore];

//Dimensioni area di gioco
TetrisArea.height = cella * MatriceCampo.length;
TetrisArea.width = cella * MatriceCampo[0]. length;

//////////////////////////////////////////////////////FUNZIONI///////////////////////////////////////////////////////////////

//Funzione per disegnare la griglia all'area di gioco
function disegnaGriglia() {
    //itera attraverso le righe della matrice campo
    for(let righe = 0; righe < MatriceCampo.length; righe++){ 
        //itera attraverso le colonne della riga corrente
        for(let colonne = 0; colonne < MatriceCampo[righe].length; colonne++){ 
            //calcolo posizioni cella corrente
            const x = colonne * cella;
            const y = righe * cella;
            //stile bordo e bordo

            if (MatriceCampo[righe][colonne] !== 0) {
                ELtetris.fillStyle = MatriceCampo[righe][colonne]; // Usa il colore memorizzato
                ELtetris.fillRect(x, y, cella, cella);
            }

            ELtetris.lineWidth = 2;
            ELtetris.strokeStyle='black';
            ELtetris.strokeRect(x, y, cella, cella);
        }
    }
}

//////////////////////////////////////////////////COSTRUTTORI//////////////////////////////////////////////////////////////
class Tetramino {
    constructor() {
        this.width = cella;
        this.height = cella;
        this.forma = formetetramini[valorecasuale];
        this.colore = coloretramini[valorecasuale];
        const larghezzaReale = this.calcolaLarghezza();
        this.xpos = (MatriceCampo[0].length / 2 - Math.floor(larghezzaReale / 2)) * cella;
        this.ypos = 0;
    }

    disegna() {
        ELtetris.fillStyle = this.colore;
        for (let righe = 0; righe < this.forma.length; righe++) {
            for (let colonne = 0; colonne < this.forma[righe].length; colonne++) {
                if (this.forma[righe][colonne] === 1) {
                    const x = this.xpos + colonne * cella;
                    const y = this.ypos + righe * cella;
                    ELtetris.fillRect(x, y, this.width, this.height);
                }
            }
        }
    }

    calcolaAltezza() {
        //reduce itera su ogni riga di forma
        //se la riga contiene almeno un 1 incrementa altezza
        return this.forma.reduce((altezza, riga) => altezza + (riga.some(cell => cell === 1) ? 1 : 0), 0);
    }

    calcolaLarghezza() {
        //Questa operazione serve a convertire le righe in colonne, per poter analizzare ogni colonna come se fosse una riga.
        const trasposta = this.forma[0].map((_, colIndex) => this.forma.map(riga => riga[colIndex]));
        return trasposta.reduce((larghezza, colonna) => larghezza + (colonna.some(cell => cell === 1) ? 1 : 0), 0);
    }

    bloccaTetramino(){
        for (let righe = 0; righe < tetramino.forma.length; righe++) {
            for (let colonne = 0; colonne < tetramino.forma[righe].length; colonne++) {
                if (tetramino.forma[righe][colonne] === 1) {
                    var stampay = tetramino.ypos + righe * cella;
                    var stampax = tetramino.xpos + colonne * cella;
                    MatriceCampo[stampay / cella][stampax / cella] = this.colore;
                }
            }
        }
        console.log(MatriceCampo);
        valorecasuale = Math.round(Math.random() * 6);
        tetramino = new Tetramino();
        noblock = true;
    }

    //calcola l'altezza occupata di ciascuna colonna
    calcolaAltezzaColonna() {
        //array per memorizzare altezza di ogni colonna 
        const arrayAltColonne = [];
    
        for (let colonna = 0; colonna < this.forma[0].length; colonna++) {
            let altezzaC = 0;
    
            //All'interno di ogni colonna, si scorre dall'ultima riga verso la prima
            //Si scorre dall'ultima riga verso la prima (dal basso verso l'alto) per ottimizzare il calcolo dell'altezza della colonna, fermandosi non appena si trova la prima cella occupata (1).
            for (let riga = this.forma.length - 1; riga >= 0; riga--) { 
                if (this.forma[riga][colonna] === 1) {
                    altezzaC = riga + 1;
                    break;
                }
            }

            if (altezzaC !== 0){
                arrayAltColonne.push(altezzaC);
            }
        }
    
        return arrayAltColonne;
    }

    calcolaLunghezzaRiga(){ //analizza ogni riga tetramino
        const indiciInizio = [];
        const indiciFine = [];

        for (let righe = 0; righe < this.forma.length; righe++) {
            let indiceInizioArray = -1;
            let indiceFineArray = -1;

            for (let colonne = 0; colonne < this.forma[righe].length; colonne++){
                if (this.forma[righe][colonne] === 1){
                    if ( indiceInizioArray === -1) {
                        indiceInizioArray = colonne;
                    }
                    indiceFineArray = colonne;
                }
            }

            if (this.forma[righe].every(cell => cell === 0)){
            } else {
                indiciInizio.push(indiceInizioArray);
                indiciFine.push(indiceFineArray);
            }
        }
        return [indiciInizio, indiciFine]
    }



    movimentoVert() {
        const altezzeColonne = this.calcolaAltezzaColonna(); // Ottiene le altezze delle colonne della forma corrente
        const YinMatrice = this.ypos / cella; //pos verticale

        for (let colonna = 0; colonna < altezzeColonne.length; colonna++) {
             // Calcola la base del tetramino in ogni colonna, in termini di posizione nella matrice
            const Basetetramino = YinMatrice + altezzeColonne[colonna];
            const XinMatrice = this.xpos / cella + colonna; //pos orizz
    
            // Controlla se c'è collisione con il limite inferiore o con blocchi esistenti
            if (Basetetramino > MatriceCampo.length || MatriceCampo[Basetetramino]?.[XinMatrice] !== 0) {
                noblock = false;
                //return;
            }
        }
    
        // Nessuna collisione, sposta il tetramino verso il basso
        if(noblock){
            this.ypos += cella;
        } else {
            this.bloccaTetramino(); // Blocca il tetramino nella sua posizione attuale
        }
    }

    movimentoOrizzontale(direzione) {
        // Sposta il tetramino a sinistra o destra
        const nuovaXpos = this.xpos + direzione * cella;
        const larghezzaReale = this.calcolaLarghezza();
        const lunghezzaRighe = this.calcolaLunghezzaRiga();
        const indiciInizio = lunghezzaRighe[0];
        const inidiciFine = lunghezzaRighe[1];
        const YinMatrice = this.ypos / cella;

        for (let righe = 0; righe < indiciInizio.length; righe++) {
            const latotetraminominore = nuovaXpos / cella + indiciInizio[righe];
            const latotetraminomaggiore = nuovaXpos / cella + inidiciFine[righe];

            if (direzione === -1 && MatriceCampo[YinMatrice + righe][latotetraminominore] !== 0) {
                blockorr = false;
                return;
            }

            if (direzione === 1 && MatriceCampo[YinMatrice + righe][latotetraminomaggiore] !== 0) {
                blockorr = false;
                return;
            }
        }

        if (blockorr) {
            this.xpos = nuovaXpos;
        }

        blockorr = true;

        // if (nuovaXpos >= 0 && nuovaXpos + larghezzaReale * cella <= TetrisArea.width) {
        //     this.xpos = nuovaXpos;
        // }
    }
}

function aggiorna() {
    ELtetris.clearRect(0, 0, TetrisArea.width, TetrisArea.height);
    disegnaGriglia();
    tetramino.disegna();
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        tetramino.movimentoOrizzontale(-1);
    } else if (event.key === "ArrowRight") {
        tetramino.movimentoOrizzontale(1);
    } else if (event.key === "ArrowDown") {
        tetramino.movimentoVert();
    }
    aggiorna();
});

//Prende il tempo attuale in ms
let ultimoAggiornamento = Date.now();
//intervallo di tempo
const tempoCaduta = 1000;

function cadutaAutomatica() {
    //Prende il tempo attuale in ms e incrementa con la richiesta dei frame
    const tempoOra = Date.now();
    //Quando la differenza tra il tempo attuale e l'ultimo aggiornamento è maggiore o uguale al'intervallo aggiorna la posizione y e l'ultimo aggiornamento
    if (tempoOra - ultimoAggiornamento >= tempoCaduta) {
        tetramino.movimentoVert();
        ultimoAggiornamento = tempoOra;
    }
    aggiorna();
    requestAnimationFrame(cadutaAutomatica);
}

requestAnimationFrame(cadutaAutomatica);

var tetramino = new Tetramino();
tetramino.calcolaLunghezzaRiga();