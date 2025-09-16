/////////////////////////////////////////////////////ELEMENTI////////////////////////////////////////////////////////////////

//Canvas El
const TetrisArea = document.getElementById('Areadigioco');
//Contenuto Canvas
var ELtetris = TetrisArea.getContext('2d');

const prossimoTetraminoEl = document.getElementById('prossimoTetramino');
const prossimoTetraminoCtx = prossimoTetraminoEl.getContext('2d');




// Grandezza blocco 36
var cella = 30;
var punteggio = 0;
var puntiBasePerRiga = 100;

//grandezza blocco  prossimo tetramino
var cellaPT = cella / 1.2;


var yposinizialegriglia = 0;

var valoreCasuale = Math.floor(Math.random() * 7);

//Stile e posizionamento dell'area di gioco
// TetrisArea.style.background = 'red';
TetrisArea.style.position = 'absolute';
TetrisArea.style.top = '50%';
TetrisArea.style.left = '50%';
TetrisArea.style.transform = 'translate(-50%, -50%)';

// prossimoTetraminoEl.style.backgroundColor = 'red';
prossimoTetraminoEl.width = cella * 5;
prossimoTetraminoEl.height = cella * 4;


// prossimoTetraminoEl.style.border-radius

var ultimoAggiornamento = Date.now();  //Prende il tempo attuale in ms
var tempoCaduta = 1000;  //intervallo di tempo

var righeInvisibili = 4;
var righeVisibili = 20;

var go = false;

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
// var MatriceCampo = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];

var MatriceCampo = [];

for (let i = 0; i <= 23; i++) {
    MatriceCampo.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
};
// console.log(MatriceCampo);


//Array contenenti tetramini e colori
var formetetramini = [TetraminoT.forma, TetraminoL.forma, TetraminoJ.forma, TetraminoI.forma, TetraminoS.forma, TetraminoZ.forma, TetraminoC.forma];
var coloretramini = [TetraminoT.colore, TetraminoL.colore, TetraminoJ.colore, TetraminoI.colore, TetraminoS.colore, TetraminoZ.colore, TetraminoC.colore];

//Dimensioni area di gioco
TetrisArea.height = cella * MatriceCampo.length;
TetrisArea.width = cella * MatriceCampo[0]. length;

/////////////////////////////////////////////FUNZIONE ELIMINARE RIGA E PUNTEGGIO//////////////////////////////////////////////////////

var moltiplicatore = 1;
var numeroRigheScoppiatePerMolt = 0;

function eliminaRiga() {

    var bonus = 0;
    var numeroRigheScoppiate = 0;
    
    for(let riga = 0; riga < MatriceCampo.length; riga++){
        const rigaCompleta = MatriceCampo[riga].every(num => num !== 0);
        var indiceRiga = riga;
        if (rigaCompleta){
            MatriceCampo.splice(indiceRiga,1);
            MatriceCampo.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            numeroRigheScoppiate += 1;
        }
    }

    if(numeroRigheScoppiate !== 0){
        numeroRigheScoppiatePerMolt += numeroRigheScoppiate;
        if(numeroRigheScoppiatePerMolt >= 18){moltiplicatore = 10} else if(numeroRigheScoppiatePerMolt >= 16){moltiplicatore = 9} else if(numeroRigheScoppiatePerMolt >= 14){moltiplicatore = 8} else if(numeroRigheScoppiatePerMolt >= 12){moltiplicatore = 7} else if(numeroRigheScoppiatePerMolt >= 10){moltiplicatore = 6} else if(numeroRigheScoppiatePerMolt >= 8){moltiplicatore = 5} else if(numeroRigheScoppiatePerMolt >= 6){moltiplicatore = 4} else if(numeroRigheScoppiatePerMolt >= 4){moltiplicatore = 3} else if(numeroRigheScoppiatePerMolt >= 2){moltiplicatore = 2}
        if(numeroRigheScoppiate === 2){ bonus += 50 } else if (numeroRigheScoppiate === 3){ bonus += 100 } else if (numeroRigheScoppiate === 4){ bonus += 150 }
        punteggio += (puntiBasePerRiga * numeroRigheScoppiate * moltiplicatore) + bonus;
        // console.log(numeroRigheScoppiatePerMolt);
        // console.log(numeroRigheScoppiate);
    }

    document.getElementById('punteggio').textContent = punteggio;
    document.getElementById('moltiplicatore').textContent = 'X ' + moltiplicatore;

    difficoltàClassicMode();

}

/////////////////////////////////////////////FUNZIONE PER DISEGNARE GRIGLIA///////////////////////////////////////////////

function disegnaGriglia() {

    for(let righe = 0; righe < MatriceCampo.length; righe++){  //itera attraverso le righe della matrice campo

    if (righe < righeInvisibili) continue;

        for(let colonne = 0; colonne < MatriceCampo[righe].length; colonne++){    //itera attraverso le colonne della riga corrente
            go = true;
            const x = colonne * cella; //calcolo posizione x cella corrente
            const y = righe * cella;   //calcolo posizione y cella corrente

            if (MatriceCampo[righe][colonne] !== 0) {

                ELtetris.fillStyle = MatriceCampo[righe][colonne]; // Usa il colore memorizzato
                ELtetris.fillRect(x, y, cella, cella);

            } else {
                
            }

            ELtetris.lineWidth = 2;
            ELtetris.strokeStyle='black';
            ELtetris.strokeRect(x, y, cella, cella);
        }
    }
}

disegnaGriglia();


////////////////////////////////////////////VELOCITA GIOCO////////////////////////////////////////////////////

function difficoltàClassicMode () {
    if (punteggio >= 195000) {
        tempoCaduta = 100;
        //puntiBasePerRiga = 325;
    } else if (punteggio >= 155000) {
        tempoCaduta = 130;
        //puntiBasePerRiga = 300;
    } else if (punteggio >= 120000) {
        tempoCaduta = 180;
        //puntiBasePerRiga = 275;
    } else if (punteggio >= 90000) {
        tempoCaduta = 250;
        //puntiBasePerRiga = 250;
    } else if (punteggio >= 65000) {
        tempoCaduta = 325;
        //puntiBasePerRiga = 225;
    } else if (punteggio >= 45000) {
        tempoCaduta = 425;
        //puntiBasePerRiga = 200;
    } else if (punteggio >= 30000) {
        tempoCaduta = 550;
        //puntiBasePerRiga = 175;
    } else if (punteggio >= 20000) {
        tempoCaduta = 700;
        //puntiBasePerRiga = 150;
    } else if (punteggio >= 10000) {
        tempoCaduta = 850;
        //puntiBasePerRiga = 125;
    } else {
        // livello iniziale
        tempoCaduta = 1000;
        puntiBasePerRiga = 10000;
    }
}



///////////////////////////////////////FUNZIONE DI AGGIORNAMENTO///////////////////////////////////////////////////////

// function aggiorna() {

//     ELtetris.clearRect(0, 0, TetrisArea.width, TetrisArea.height);
//     disegnaGriglia();
//     tetramino.disegna();

// }


/////////////////////////////////////////////GAMEOVER///////////////////////////////////////////////


function gameOver() {
    for (let i = 0; i <= righeInvisibili; i++) {
        if (MatriceCampo[i].some(element => element !== 0)) {
            alert(MatriceCampo[i]);
            return;
        }
    }
}

/////////////////////////////////////////////DISEGNAPROSSIMOTETRAMINO///////////////////////////////////////////////

function disegnaProssimoTetramino() {

    prossimoTetraminoCtx.clearRect(0, 0, prossimoTetraminoEl.width, prossimoTetraminoEl.height);


    var prossimotetramino = new Tetramino();


    prossimoTetraminoCtx.fillStyle = prossimotetramino.colore;


    for (let riga = 0; riga < prossimotetramino.forma.length; riga++ ) {
        for (let colonna = 0; colonna < prossimotetramino.forma[riga].length; colonna++ ) {
            if (prossimotetramino.forma[riga][colonna] !== 0) {
                if (prossimotetramino.forma === formetetramini[3]) {
                    var x = colonna * cellaPT + cellaPT;
                } else {
                    var x = colonna * cellaPT;
                }

                const y = riga * cellaPT;
                prossimoTetraminoCtx.fillRect(x, y, cellaPT, cellaPT);
            }
        }
    }
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
        if (this.forma ===  formetetramini[3]) {
            this.ypos = 0;
        } else {this.ypos = 60;};
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

                    // ELtetris.fillRect(x, y, this.width, this.height);



                    if (y >= 120) {
                        ELtetris.fillRect(x, y, this.width, this.height);
                        ELtetris.strokeStyle = "#fff";
                        ELtetris.strokeRect(x, y, this.width, this.height);
                    }

                }
            }
        }
    }


    // --- ADD THIS INSIDE class Tetramino, subito dopo il metodo disegna() ---

calcolaGhostY() {
    // ritorna la y (in px) dove il tetramino atterrerà senza modificarne lo stato
    let ghostY = this.ypos;

    while (true) {
        const nextY = ghostY + cella; // prova a spostare di 1 cella in basso
        let collision = false;

        for (let r = 0; r < this.forma.length; r++) {
            for (let c = 0; c < this.forma[r].length; c++) {
                if (this.forma[r][c] !== 1) continue;

                const matrixRow = Math.floor(nextY / cella) + r;
                const matrixCol = Math.floor(this.xpos / cella) + c;

                // fuori orizzonte (sicurezza)
                if (matrixCol < 0 || matrixCol >= MatriceCampo[0].length) {
                    collision = true;
                    break;
                }

                // collisione col fondo
                if (matrixRow >= MatriceCampo.length) {
                    collision = true;
                    break;
                }

                // collisione con blocco esistente (solo se dentro la matrice)
                if (matrixRow >= 0 && MatriceCampo[matrixRow][matrixCol] !== 0) {
                    collision = true;
                    break;
                }
            }
            if (collision) break;
        }

        if (collision) break;
        ghostY = nextY;
    }

    return ghostY;
}

disegnaGhost() {
    const ghostY = this.calcolaGhostY();

    ELtetris.save();
    ELtetris.globalAlpha = 0.25;           // trasparenza della ghost
    ELtetris.fillStyle = this.colore;     // stesso colore ma trasparente
    ELtetris.setLineDash([5, 5]);         // bordo tratteggiato (opzionale)
    ELtetris.lineWidth = 2;

    for (let r = 0; r < this.forma.length; r++) {
        for (let c = 0; c < this.forma[r].length; c++) {
            if (this.forma[r][c] === 1) {
                const x = this.xpos + c * cella;
                const y = ghostY + r * cella;

                // disegna solo nella parte visibile (coerente col tuo disegna())
                if (y >= righeInvisibili * cella) {
                    ELtetris.fillRect(x, y, cella, cella);
                    ELtetris.strokeStyle = "#ffffff";
                    ELtetris.strokeRect(x, y, cella, cella);
                }
            }
        }
    }

    ELtetris.restore();
}


    /////////////////////////////////METODO PER CALCOLARE LARGHEZZA TETRAMINO///////////////////////////////////////////////

    calcolaLarghezza() {
        const trasposta = this.forma[0].map((_, colIndex) => this.forma.map(riga => riga[colIndex]));  //Questa operazione serve a convertire le righe in colonne, per poter analizzare ogni colonna come se fosse una riga.
        return trasposta.reduce((larghezza, colonna) => larghezza + (colonna.some(cell => cell === 1) ? 1 : 0), 0);   //ritorna 2/3/4
    }


    //////////////////////////////////METODO PER BLOCCARE TETRAMINO//////////////////////////////////////////////////////

    bloccaTetramino(){

        for (let righe = 0; righe < this.forma.length; righe++) {

            for (let colonne = 0; colonne < this.forma[righe].length; colonne++) {

                if (tetramino.forma[righe][colonne] === 1) {
                    const y = (this.ypos + righe * cella) / cella;
                    const x = (this.xpos + colonne * cella) / cella;
                    if (y >= 0 && y < MatriceCampo.length && x >= 0 && x < MatriceCampo[0].length) {
                        MatriceCampo[y][x] = this.colore;
                        ELtetris.strokeStyle = 'white';
                        ELtetris.strokeRect(x * cella, y * cella, cella, cella);
                    }
                }
            }
        }

        eliminaRiga();
        valoreCasuale = Math.floor(Math.random() * 7);
        tetramino = prossimotetramino;
        prossimotetramino = new Tetramino();

        // setInterval (() => {
            disegnaProssimoTetramino();
        // }, 500);

        // console.log(prossimotetramino);

        gameOver();
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

//////////////////////////////////OGGETTO PER TASTI///////////////////////////////////////////////////////////////
const DAS = 150;
const ARR = 50;


let statoTasti = {

    ArrowLeft: {
        pressed: false, 
        dasTimer: 0, 
        arrTimer: 0,
    },

    ArrowRight: {
        pressed: false, 
        dasTimer: 0, 
        arrTimer: 0,
    },

    ArrowDown: {
        pressed: false, 
        dasTimer: 0, 
        arrTimer: 0,
    }

};

let calmate = true;

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // console.log(statoTasti[key]);
})


document.addEventListener('keydown', (event) => {
    const key = event.key; 
    if (statoTasti[key] && !statoTasti[key].pressed) {
        statoTasti[key].pressed = true;
        statoTasti[key].dasTimer = Date.now();
        statoTasti[key].arrTimer = Date.now();

        //nuovo aggiunto isLeft e isRight
        if (key === "ArrowLeft" ) tetramino.movimentoOrizzontale(-1), isLeftPressed = true;
        if (key === "ArrowRight" ) tetramino.movimentoOrizzontale(1), isRightPressed = true; 
        if (key === "ArrowDown" ) tetramino.movimentoVert();
        //fine
        
    } 
        if (key === " ") { tetramino.HARDDROP() };
        if ( key === "ArrowUp" && calmate) {
            calmate = false;
            tetramino.ruota();
        }

});

document.addEventListener("keyup", (event) => {
    const key = event.key;
    if (statoTasti[key]) {statoTasti[key].pressed = false;}

    //nuovo aggiunto isLeft e isRight
    if ( key === "ArrowLeft") isLeftPressed = false;
    if ( key === "ArrowRight") isRightPressed = false;
    //fine

    calmate = true;
})

function aggiorna() {
    ELtetris.clearRect(0, 0, TetrisArea.width, TetrisArea.height);
    disegnaGriglia();

    // disegna l'ombra (ghost) del tetramino corrente
    if (tetramino && typeof tetramino.disegnaGhost === 'function') {
        tetramino.disegnaGhost();
    }

    // disegna il tetramino attivo
    tetramino.disegna();
}


// requestAnimationFrame(gameLoop);


//nuovo
let isLeftPressed = false;
let isRightPressed = false;
//fine


function gameLoop() {
    const now = Date.now();

    if (now - ultimoAggiornamento >= tempoCaduta) {
        tetramino.movimentoVert();
        ultimoAggiornamento = now;
    }

    //controllo DAS e ARR
    for (const key in statoTasti) {
        const stato = statoTasti[key];
        if (stato.pressed) {
            const elapsedDAS = now - stato.dasTimer;
            const elapsedARR = now - stato.arrTimer;

            if (elapsedDAS >= DAS && elapsedARR >= ARR) {

                //nuovo aggiunto isRight e isLeft
                if (key === "ArrowLeft" && isRightPressed === false) tetramino.movimentoOrizzontale(-1), isLeftPressed = true, isRightPressed = false;
                if (key === "ArrowRight" && isLeftPressed === false) tetramino.movimentoOrizzontale(1), isLeftPressed = false, isRightPressed = true;
                //fine

                if (key === "ArrowDown") tetramino.movimentoVert();
                stato.arrTimer = now;
            }
        }
    }

    aggiorna();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) )


//////////////////////////////////LISTENER SUI TASTI FRECCIA///////////////////////////////////////////////////////////////

var tetramino = new Tetramino();

valoreCasuale = Math.floor(Math.random() * 7);
var prossimotetramino = new Tetramino();
// console.log(prossimotetramino.forma);
disegnaProssimoTetramino();


var giocoInCorso = false;

const btnPlay = document.getElementById("play-btn");
console.log(btnPlay);

const testEl = document.getElementById('test');
console.log(testEl);

// testEl.style.f = 'white';
// testEl.style.fontSize = '30px';

btnPlay.addEventListener("click", () => {
    if (giocoInCorso === false) {
        giocoInCorso = true;
        console.log('if');
        startGame();
        btnPlay.innerHTML = "Pausa";

    } else  {
        // cancelAnimationFrame(gameLoop);
        giocoInCorso = null;
        console.log('else');
    }
});


const countDownEl = document.getElementById("countdown-start");
countDownEl.style.fontSize = "8rem";
countDownEl.style.fontFamily = ""

function startGame() {
    // if (giocoInCorso) return;
    let tempo = 3;
    countDownEl.innerHTML = tempo;
    let intervallo = setInterval(() => {
        if(tempo > 0) {
            countDownEl.innerHTML = tempo;
            tempo--
        } else if (tempo === 0) {

            countDownEl.innerHTML = "VIA!";

            setTimeout(() =>{
                countDownEl.textContent ="";
                requestAnimationFrame(gameLoop);
            }, 1000);

            clearInterval(intervallo);
        }
    }, 1000)
    // document.getElementById('play-btn').remove();
}