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


//Funzione di aggiornamento del tetramino
var update = function() {
    ELtetris.clearRect(0, 0, window.innerWidth, window.innerHeight);
    setTimeout(() =>{
        requestAnimationFrame(update);
    }, 2000);
    disegnaGriglia();
    tetramino.movimento();
}


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

//////////////////////////////////////////////////COSTRUTTORI//////////////////////////////////////////////////////////////7
class Tetramino {
    constructor(xpos, ypos, width, height, colore, forma, altezza) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.colore = colore;
        this.forma = forma;
        this.altezza = altezza;

        this.ypos = 0;
        this.xpos = 0;
    }

    createtramino() {
        this.width = cella;
        this.height = cella;
        this.forma = (formetetramini[valorecasuale]);
        this.colore = (coloretramini[valorecasuale]);
        ELtetris.fillStyle = this.colore;
        var xposiniziale = this.xpos;
        var yposiniziale = this.ypos;
        this.altezza = 0;
        //itera attraverso le righe del tetramino
        for(let righe = 0; righe < this.forma.length; righe++){
            var riga = this.forma[righe];
            
            //calcolo pos X iniziale tetramino 
            var xposiniziale = ((MatriceCampo[0].length / 2) - Math.floor(riga.length / 2)) * cella;
            //itera attraverso le colonne della riga corrente del tetramino creato
            for(let colonne = 0; colonne < this.forma[righe].length; colonne++){
                //se la cella della matrice contiene 1 => disegnare blocco
                if(riga[colonne] === 1){
                    ELtetris.fillRect(xposiniziale, yposiniziale, this.width, this.height);
                }
                xposiniziale = xposiniziale + cella;
            }
            function altezzatetraminoo(array, number) {
                return array.every(value => value === number);
            }

            
            if (altezzatetraminoo(riga, 0)){
                this.altezza = this.altezza;
            } else {
                this.altezza += cella;
            }

            yposiniziale = yposiniziale + cella;
        }
    }

    movimento(){
        this.createtramino();
        
        //blocco tetramino se canvas è finito
        if ((tetramino.ypos + this.altezza) < TetrisArea.height) {
            tetramino.ypos += cella;
        } else {
            tetramino.ypos = tetramino.ypos;
        }
    }


    movimentorr(){
        document.addEventListener("keydown", (event) => {
            if (event.key === 'ArrowLeft') {
                console.log('sinistra');
                tetramino.xpos -= cella;
                console.log(tetramino.xpos);
            }
            if (event.key === 'ArrowRight') {
                console.log('destra');
                tetramino.xpos += cella;
            }
            if (event.key === 'ArrowDown') {
                console.log('giu');
                tetramino.ypos += cella;
            }
        });
    }
}


disegnaGriglia();

var tetramino = new Tetramino(this.xpos, this.ypos, this.width, this.height, this.colore, this.forma);
tetramino.createtramino();

update();