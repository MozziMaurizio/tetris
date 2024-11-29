// var matriceT = [
//     [0, 1, 0],
//     [1, 1, 1],
//     [0, 0, 0]
// ];

// var matriceL = [
//     [1, 0, 0, 0],
//     [1, 1, 1, 1],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ];

// var matriceJ = [
//     [0, 0, 0, 1],
//     [1, 1, 1, 1],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ];

// var matriceI = [
//     [0, 1, 0, 0],
//     [0, 1, 0, 0],
//     [0, 1, 0, 0],
//     [0, 1, 0, 0]
// ];

// var matriceS = [
//     [0, 1, 1],
//     [1, 1, 0],
//     [0, 0, 0]
// ];

// var matriceZ = [
//     [1, 1, 0],
//     [0, 1, 1],
//     [0, 0, 0]
// ];

// var matriceC = [
//     [1, 1],
//     [1, 1]
// ];

const TetrisArea = document.getElementById('Areadigioco');

var ELtetris = TetrisArea.getContext('2d');

var cella = 30;

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


var yposinizialegriglia = 0;

TetrisArea.height = cella * MatriceCampo.length;
TetrisArea.width = cella * MatriceCampo[0]. length;
TetrisArea.style.background = 'red';
TetrisArea.style.position = 'absolute';
TetrisArea.style.top = '50%';
TetrisArea.style.left = '50%';
TetrisArea.style.transform = 'translate(-50%, -50%)';

function disegnaGriglia() {
    for(let righe = 0; righe < MatriceCampo.length; righe++){
        
        var riga = MatriceCampo[righe];
        var xposinizialegriglia = 0;
        
        for(let colonne = 0; colonne < MatriceCampo[righe].length; colonne++){
            
            // ELtetris.strokeRect(xposinizialegriglia, yposinizialegriglia, cella, cella);
            // xposinizialegriglia = xposinizialegriglia + cella;
            const x = colonne * cella;
            const y = righe * cella;
    
            ELtetris.lineWidth = 2;
            ELtetris.strokeStyle='black';
            ELtetris.strokeRect(x, y, cella, cella);
            
            
        }
        // yposinizialegriglia = yposinizialegriglia + cella;
    }
}

disegnaGriglia();



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

var formetetramini = [TetraminoT.forma, TetraminoL.forma, TetraminoJ.forma, TetraminoI.forma, TetraminoS.forma, TetraminoZ.forma, TetraminoC.forma];
var coloretramini = [TetraminoT.colore, TetraminoL.colore, TetraminoJ.colore, TetraminoI.colore, TetraminoS.colore, TetraminoZ.colore, TetraminoC.colore];

var valorecasuale = Math.round(Math.random() * 6);


class Tetramino {
    constructor(xpos, ypos, width, height, colore, forma) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
        this.colore = colore;
        this.forma = forma;

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
        
        for(let righe = 0; righe < this.forma.length; righe++){
            var riga = this.forma[righe];
            var xposiniziale = (TetrisArea.width / 2) - (this.width * (this.forma.length / 2));
            // var xposiniziale = (TetrisArea.width / 2) - this.width * 2
            for(let colonne = 0; colonne < this.forma[righe].length; colonne++){
                
                if(riga[colonne] === 1){
                    ELtetris.fillRect(xposiniziale, yposiniziale, this.width, this.height);
                }
        
                xposiniziale = xposiniziale + cella;
            }
            yposiniziale = yposiniziale + cella;
        }
    
    }

    movimento(){
        this.createtramino();
        this.ypos += cella;

        
    }

}

var update = function() {
   
    ELtetris.clearRect(0, 0, window.innerWidth, window.innerHeight);

    disegnaGriglia();
    
    tetramino.movimento();

    if ((tetramino.ypos + cella) < TetrisArea.height) {
        setTimeout(() =>{
            requestAnimationFrame(update);
        }, 1000);
    } else {
        tetramino.ypos = this.ypos;
    }
    
}

var tetramino = new Tetramino(this.xpos, this.ypos, this.width, this.height, this.colore, this.forma);
tetramino.createtramino();
update();