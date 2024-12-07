/////////////////////////////////////////////////////ELEMENTI////////////////////////////////////////////////////////////////

//Canvas El
const TetrisArea = document.getElementById('Areadigioco');

//Contenuto Canvas
var ELtetris = TetrisArea.getContext('2d');

// Grandezza blocco
var cella = 30;

var yposinizialegriglia = 0;


let tetramino;


//Stile e posizionamento dell'area di gioco
// TetrisArea.style.background = 'red';
TetrisArea.style.position = 'absolute';
TetrisArea.style.top = '50%';
TetrisArea.style.left = '50%';
TetrisArea.style.transform = 'translate(-50%, -50%)';

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
    // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//Array contenenti tetramini e colori
var formetetramini = [TetraminoT.forma, TetraminoL.forma, TetraminoJ.forma, TetraminoI.forma, TetraminoS.forma, TetraminoZ.forma, TetraminoC.forma];
var coloretramini = [TetraminoT.colore, TetraminoL.colore, TetraminoJ.colore, TetraminoI.colore, TetraminoS.colore, TetraminoZ.colore, TetraminoC.colore];

var valorecasuale = Math.round(Math.random() * formetetramini.length);

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
            ELtetris.lineWidth = 2;
            ELtetris.strokeStyle='black';
            ELtetris.strokeRect(x, y, cella, cella);
        }
    }
}

function creaTetramino() {
     var formaCasuale = formetetramini[valorecasuale];
     var coloreCasuale = coloretramini[valorecasuale];
     tetramino = new Tetramino(formaCasuale, coloreCasuale);
}



function fusione() {
    //funzione per fondere matrice nel campo quando raggiunge il bordo in basso
    if (tetramino.ypos + tetramino.calcolaAltezza() * cella >= TetrisArea.height) {
        console.log('fusione');
        console.log(MatriceCampo);
        //ciclo tetramino
         for (let righe = 0; righe < tetramino.forma.length; righe++) {
            for (let colonne = 0; colonne < tetramino.forma[righe].length; colonne++) {
                //se cella tetramino contiene un 1
                var stampay = tetramino.ypos + righe * cella;
                var stampax = tetramino.xpos + colonne * cella;
                if (tetramino.forma[righe][colonne] === 1) {
                    //calcolo coordinate tetramino nel campo
                    console.log(tetramino.colore)
                    //verifico che coordinate siano dentro i limiti della matrice
                    if (stampay / cella <= MatriceCampo.length && stampax / cella <= MatriceCampo[0].length) {
                        //FUUUUSIONEE
                        MatriceCampo[stampay / cella][stampax / cella] = 1;
                        
                    }
                }
                if (MatriceCampo[stampay / cella][stampax / cella] === 1) {
                    console.log('filled ')
                    ELtetris.fillStyle = 'black';
                    ELtetris.fillRect(stampax, stampay, cella, cella);
                    tetramino.forma = [];
                    return true;

                }

            }
            
        }
        // tetramino.disattiva();
        // creaTetramino();
        return false;
       
    }
   
}


function verificaCollisione() {
    //cilo forma tetramino
    for (let righe = 0; righe < tetramino.forma.length; righe++) {
        for (let colonne = 0; colonne < tetramino.forma[righe].length; colonne++) {
            //se la cella del tetramino contiene un 1
            if (tetramino.forma[righe][colonne] === 1) {
                //calcolo coordinate tetramino nel campo di gioco
                let xCampo = Math.floor((tetramino.xpos + colonne) / cella);
                let yCampo = Math.floor((tetramino.ypos + righe) / cella);
                console.log('xCampo:', xCampo , 'yCampo:', yCampo );
                //verifico che coordinate siano dentro i limiti della matrice
                if(xCampo >= 0 && xCampo < MatriceCampo[0].length && yCampo >= 0 && yCampo < MatriceCampo.length) {
                    // Se la cella nella matrice è occupata (valore 1), c'è una collisione
                    if(MatriceCampo[yCampo ][xCampo ] === 1)
                    console.log('collisione');
                    ELtetris.fillStyle = tetramino.colore;
                    ELtetris.fillRect(xCampo, yCampo, cella, cella);
                    return true;
                    tetramino.disattiva();
                    creaTetramino()

                }
            }

        }
        
    }
    return false;
}

function aggiorna() {
    if (tetramino) {
        if (tetramino.ypos + altezzaReale * cella  <= TetrisArea.height) {
            ELtetris.clearRect(0, 0, TetrisArea.width, TetrisArea.height);
            disegnaGriglia();
            tetramino.disegna();
            fusione();
        } else {
            creaTetramino();
        }
    }
    
    
}

function inizioGioco() {
    creaTetramino();
    requestAnimationFrame(cadutaAutomatica);
}

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

//////////////////////////////////////////////////COSTRUTTORI//////////////////////////////////////////////////////////////7
class Tetramino {
    constructor() {
        this.width = cella;
        this.height = cella;
        this.forma = formetetramini[valorecasuale];
        this.colore = coloretramini[valorecasuale];
        const larghezzaReale = this.calcolaLarghezza();
        this.xpos = (MatriceCampo[0].length / 2 - Math.floor(larghezzaReale / 2)) * cella;
        this.ypos = 0;
        this.attivo = true;
    }

    disattiva() {
        this.attivo = false;
        this.forma = [];
    }

    disegna() {
        if (this.attivo) {
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
    }

    calcolaAltezza() {
        return this.forma.reduce((altezza, riga) => altezza + (riga.some(cell => cell === 1) ? 1 : 0), 0);
    }

    calcolaLarghezza() {
        const trasposta = this.forma[0].map((_, colIndex) => this.forma.map(riga => riga[colIndex]));
        return trasposta.reduce((larghezza, colonna) => larghezza + (colonna.some(cell => cell === 1) ? 1 : 0), 0);
    }

    movimentoVert() {
        // Sposta il tetramino verso il basso
        const altezzaReale = this.calcolaAltezza();
        if (this.ypos + altezzaReale * cella < TetrisArea.height) {
            this.ypos += cella;
        } else {
            this.disattiva;
        }
        verificaCollisione();


        //logica se sotto c'è uno
        //MatriceCampo[(this.ypos / cella) + altezzaReale][this.xpos / cella] === 0
    }

    movimentoOrizzontale(direzione) {
        // Sposta il tetramino a sinistra o destra
        const nuovaXpos = this.xpos + direzione * cella;
        const larghezzaReale = this.calcolaLarghezza();
        if (nuovaXpos >= 0 && nuovaXpos + larghezzaReale * cella <= TetrisArea.width) {
            this.xpos = nuovaXpos;
        }
    }
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
const tempoCaduta = 100000;

inizioGioco();

requestAnimationFrame(cadutaAutomatica);


var altezzaReale = tetramino.calcolaAltezza();



// document.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowUp") {
//         // console.log(tetramino.xpos);
//         // console.log(tetramino.ypos);
//         //console.log(MatriceCampo[tetramino.ypos / cella][tetramino.xpos / cella]);
//         // MatriceCampo[tetramino.ypos / cella][tetramino.xpos / cella] = 1;
//         // console.log(MatriceCampo);

//         for (let righe = 0; righe < tetramino.forma.length; righe++) {
//             for (let colonne = 0; colonne < tetramino.forma[righe].length; colonne++) {
//                 if (tetramino.forma[righe][colonne] === 1) {
//                     var stampay = tetramino.ypos + righe * cella;
//                     var stampax = tetramino.xpos + colonne * cella;
//                     MatriceCampo[stampay / cella][stampax / cella] = 1;
//                 }

//             }
            
//         }
//         disegnaGriglia();
//         console.log(tetramino.ypos + altezzaReale * cella, TetrisArea.height )


//     }
// });




