/////////////////////////////////////////////////////ELEMENTI////////////////////////////////////////////////////////////////

//Canvas El
const TetrisArea = document.getElementById('Areadigioco');

//Contenuto Canvas
var ELtetris = TetrisArea.getContext('2d');

// Grandezza blocco
var cella = 36;
var punteggio = 0;
var combo = 0;

var yposinizialegriglia = 0;

var valoreCasuale = Math.floor(Math.random() * 7);

//Stile e posizionamento dell'area di gioco
// TetrisArea.style.background = 'red';
TetrisArea.style.position = 'absolute';
TetrisArea.style.top = '50%';
TetrisArea.style.left = '50%';
TetrisArea.style.transform = 'translate(-50%, -50%)';

let ultimoAggiornamento = Date.now();  //Prende il tempo attuale in ms
const tempoCaduta = 1000;  //intervallo di tempo

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
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],

    colore : '#1abc9c'
}

const TetraminoJ = {
    forma : [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],

    colore : '#2ecc71'
}

const TetraminoI = {
    forma : [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    //,[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//Array contenenti tetramini e colori
var formetetramini = [TetraminoT.forma, TetraminoL.forma, TetraminoJ.forma, TetraminoI.forma, TetraminoS.forma, TetraminoZ.forma, TetraminoC.forma];
var coloretramini = [TetraminoT.colore, TetraminoL.colore, TetraminoJ.colore, TetraminoI.colore, TetraminoS.colore, TetraminoZ.colore, TetraminoC.colore];

//Dimensioni area di gioco
TetrisArea.height = cella * MatriceCampo.length;
TetrisArea.width = cella * MatriceCampo[0]. length;

/////////////////////////////////////////////FUNZIONE ELIMINARE RIGA//////////////////////////////////////////////////////

function eliminaRiga() {
    var numeroRigheScoppiate = 0;
    for(let riga = 0; riga < MatriceCampo.length; riga++){
        const rigaCompleta = MatriceCampo[riga].every(num => num !== 0);
        var indiceRiga = riga;
        if (rigaCompleta){
            MatriceCampo.splice(indiceRiga,1);
            MatriceCampo.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            numeroRigheScoppiate += 1;
        }
    }
    console.log(numeroRigheScoppiate);
}

/////////////////////////////////////////////FUNZIONE PER DISEGNARE GRIGLIA///////////////////////////////////////////////

function disegnaGriglia() {

    for(let righe = 0; righe < MatriceCampo.length; righe++){  //itera attraverso le righe della matrice campo

        for(let colonne = 0; colonne < MatriceCampo[righe].length; colonne++){    //itera attraverso le colonne della riga corrente

            const x = colonne * cella; //calcolo posizione x cella corrente
            const y = righe * cella;   //calcolo posizione y cella corrente

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

////////////////////////////////////////////FUNZIONE PER CADUTA AUTOMATICA////////////////////////////////////////////////////

function cadutaAutomatica() {

    const tempoOra = Date.now();  //Prende il tempo attuale in ms e incrementa con la richiesta dei frame

    if (tempoOra - ultimoAggiornamento >= tempoCaduta) {  //Quando la differenza tra il tempo attuale e l'ultimo aggiornamento è maggiore o uguale al'intervallo aggiorna la posizione y e l'ultimo aggiornamento

        tetramino.movimentoVert();
        ultimoAggiornamento = tempoOra;

    }

    aggiorna();
    requestAnimationFrame(cadutaAutomatica);
}

///////////////////////////////////////FUNZIONE DI AGGIORNAMENTO///////////////////////////////////////////////////////

function aggiorna() {

    ELtetris.clearRect(0, 0, TetrisArea.width, TetrisArea.height);
    disegnaGriglia();
    tetramino.disegna();

}

///////////////////////////////////////////COSTRUTTORE///////////////////////////////////////////////////////
class Tetramino {

    constructor() {

        this.width = cella;
        this.height = cella;
        this.forma = formetetramini[valoreCasuale];
        this.colore = coloretramini[valoreCasuale];
        const larghezzaReale = this.calcolaLarghezza();
        this.xpos = Math.floor((MatriceCampo[0].length / 2 - larghezzaReale / 2)) * cella;
        this.ypos = 0;

    }

    ////////////////////METODO PER RUOTARE////////////////////////////////

    ruota() {
        const tetraminoRuotato = this.forma[0].map((_, colIndex) =>
            this.forma.map(riga => riga[colIndex]).reverse()
        );
    
        const tentativi = [
            { dx: 0, dy: 0 },   // posizione attuale
            { dx: -1, dy: 0 },  // prova a sinistra
            { dx: 1, dy: 0 },   // prova a destra
            { dx: 0, dy: -1 },  // prova verso l'alto
            { dx: -2, dy: 0 },  // ancora più a sinistra
            { dx: 2, dy: 0 }    // ancora più a destra
        ];
    
        for (const tentativo of tentativi) {
            if (this.rotazioneValida(tetraminoRuotato, tentativo.dx, tentativo.dy)) {
                this.forma = tetraminoRuotato;
                this.xpos += tentativo.dx * cella;
                this.ypos += tentativo.dy * cella;
                return;
            }
        }
    
        // se arriva qui, nessun tentativo è riuscito → niente rotazione
    }

    rotazioneValida(nuovaForma, offsetX = 0, offsetY = 0) {
        for (let righe = 0; righe < nuovaForma.length; righe++) {
            for (let colonne = 0; colonne < nuovaForma[righe].length; colonne++) {
                if (nuovaForma[righe][colonne] === 1) {
                    const x = (this.xpos / cella) + colonne + offsetX;
                    const y = (this.ypos / cella) + righe + offsetY;
    
                    // Fuori campo
                    if (x < 0 || x >= MatriceCampo[0].length || y >= MatriceCampo.length) {
                        return false;
                    }
    
                    // Collisione con blocco
                    if (MatriceCampo[y][x] !== 0) {
                        return false;
                    }
                }
            }
        }
        return true;
    }


    ////////////////////METODO PER DISEGNARE TETRAMINO////////////////////////////////

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

    /////////////////////////////////METODO PER CALCOLARE LARGHEZZA TETRAMINO///////////////////////////////////////////////

    calcolaLarghezza() {
        const trasposta = this.forma[0].map((_, colIndex) => this.forma.map(riga => riga[colIndex]));  //Questa operazione serve a convertire le righe in colonne, per poter analizzare ogni colonna come se fosse una riga.
        return trasposta.reduce((larghezza, colonna) => larghezza + (colonna.some(cell => cell === 1) ? 1 : 0), 0);   //ritorna 2/3/4
    }


    //////////////////////////////////METODO PER BLOCCARE TETRAMINO//////////////////////////////////////////////////////

    bloccaTetramino(){
        //console.log(MatriceCampo)

        for (let righe = 0; righe < this.forma.length; righe++) {

            for (let colonne = 0; colonne < this.forma[righe].length; colonne++) {

                if (tetramino.forma[righe][colonne] === 1) {
                    const y = (this.ypos + righe * cella) / cella;
                    const x = (this.xpos + colonne * cella) / cella;
                    if (y >= 0 && y < MatriceCampo.length && x >= 0 && x < MatriceCampo[0].length) {
                        MatriceCampo[y][x] = this.colore;
                    }
                }
            }
        }

        //console.log(MatriceCampo);
        eliminaRiga();
        valoreCasuale = Math.floor(Math.random() * 7);
        tetramino = new Tetramino();

    }

    
    /////////////////////////////////////METODO PER CALCOLARE ALTEZZA COLONNE/////////////////////////////////////////////

    calcolaAltezzaColonna() {  //calcola l'altezza occupata di ciascuna colonna

        const arrayAltColonne = [];  //array per memorizzare altezza di ogni colonna
        const arraypolloalrosto = []; //Pollo al rosto = la colonna in cui stiamo calcolando l'altezza

        for (let colonna = 0; colonna < this.forma[0].length; colonna++) {

            let altezzaCol = 0;
            let polloalrosto = 0;

            for (let riga = this.forma.length - 1; riga >= 0; riga--) {   //All'interno di ogni colonna Si scorre dall'ultima riga verso la prima (dal basso verso l'alto) per ottimizzare il calcolo dell'altezza della colonna, fermandosi non appena si trova la prima cella occupata (1).

                if (this.forma[riga][colonna] === 1) {

                    altezzaCol = riga + 1;
                    polloalrosto = colonna;
                    break;

                }
            }

            if (altezzaCol !== 0){

                arrayAltColonne.push(altezzaCol);
                arraypolloalrosto.push(polloalrosto);

            }

        }
        //console.log(arraypolloalrosto);
        return [arrayAltColonne, arraypolloalrosto];
    }

    ////////////////////////////////METODO PER CALCOLARE LUNGHEZZA RIGHE////////////////////////////////////////////////

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

        return [indiciInizio, indiciFine];

    }

    ////////////////////////////////////METODO PER MOVIMENTO VERTICALE////////////////////////////////////////////////

    movimentoVert() {

        const metodoaltezza = this.calcolaAltezzaColonna();
        const altezzeColonne = metodoaltezza[0];   // Ottiene le altezze delle colonne della forma corrente
        const polloalrosto = metodoaltezza[1];
        let collisione = false;

        for (let colonna = 0; colonna < polloalrosto.length; colonna++) {

            const BaseTetramino = this.ypos / cella + altezzeColonne[colonna];   // Calcola la base del tetramino in ogni colonna, in termini di posizione nella matrice
            const XinMatrice = this.xpos / cella + polloalrosto[colonna];   //pos orizz
            //console.log(XinMatrice);

            if (BaseTetramino > MatriceCampo.length || MatriceCampo[BaseTetramino]?.[XinMatrice] !== 0) {  // Controlla se c'è collisione con il limite inferiore o con blocchi esistenti
                collisione = true;
                break;
            }
        }

        // Nessuna collisione, sposta il tetramino verso il basso
        if(!collisione){
            this.ypos += cella;
        } else {
            this.bloccaTetramino(); 
        }
    }

    ///////////////////////////////////METODO PER MOVIMENTO ORIZZONTALE//////////////////////////////////////////////

    movimentoOrizzontale(direzione) {

        const nuovaXpos = this.xpos + direzione * cella;

        for (let riga = 0; riga < this.forma.length; riga++) {
            for (let colonna = 0; colonna < this.forma[0].length; colonna++){
                if (this.forma[riga][colonna] === 1){
                    const Posizionex = nuovaXpos / cella + colonna;
                    const Posizioney = this.ypos / cella + riga;
                    if (Posizionex < 0 || Posizionex >= MatriceCampo[0].length || MatriceCampo[Posizioney][Posizionex] !== 0) {
                        return;
                    }
                }
            }
        }
        this.xpos = nuovaXpos;
    }

    HARDDROP() {

        const metodoaltezza = this.calcolaAltezzaColonna();
        const altezzeColonne = metodoaltezza[0];   // Ottiene le altezze delle colonne della forma corrente
        const polloalrosto = metodoaltezza[1];
        let collisione = false;

        do{
            for (let colonna = 0; colonna < polloalrosto.length; colonna++) {

                const BaseTetramino = this.ypos / cella + altezzeColonne[colonna];   // Calcola la base del tetramino in ogni colonna, in termini di posizione nella matrice
                const XinMatrice = this.xpos / cella + polloalrosto[colonna];   //pos orizz
                //console.log(XinMatrice);

                if (BaseTetramino > MatriceCampo.length || MatriceCampo[BaseTetramino]?.[XinMatrice] !== 0) {  // Controlla se c'è collisione con il limite inferiore o con blocchi esistenti
                    collisione = true;
                    break;
                }
            }

            if(!collisione){
                this.ypos += cella;
            } else {
                this.bloccaTetramino(); 
            }
        
        }while(!collisione);
        
    }
}

//////////////////////////////////LISTENER SUI TASTI FRECCIA///////////////////////////////////////////////////////////////
var tetramino = new Tetramino();
var calmate = true;

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowLeft") {
        tetramino.movimentoOrizzontale(-1);
    }
    
    if (event.key === "ArrowRight") {
        tetramino.movimentoOrizzontale(1);
    }
    
    if (event.key === "ArrowDown") {
        tetramino.movimentoVert();
    }

    if (event.key === " ") {
        tetramino.HARDDROP();
    }
    
    if (calmate) {
        if (event.key === "ArrowUp") {
            calmate = false;
            tetramino.ruota();
        }
    }
    aggiorna();

});

document.addEventListener("keyup", () => {

    calmate = true;
    aggiorna();

});

document.getElementById("play-btn").addEventListener("click", () => {
    setTimeout(() => {
        requestAnimationFrame(cadutaAutomatica);
    }, 500);
    
});

