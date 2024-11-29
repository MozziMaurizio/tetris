const TetrisArea = document.getElementById('Areadigioco');

var ELtetris = TetrisArea.getContext('2d');

var cella = 20;

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
ELtetris.lineWidth = 2;
ELtetris.strokeStyle='black';

function disegnaarea() {
    yposinizialegriglia = 0;
    for (let righe = 0; righe < MatriceCampo.length; righe++) {
        var xposinizialegriglia = 0;

        for (let colonne = 0; colonne < MatriceCampo[righe].length; colonne++) {
            ELtetris.strokeRect(xposinizialegriglia, yposinizialegriglia, cella, cella);
            xposinizialegriglia = xposinizialegriglia + cella;
        }
        yposinizialegriglia = yposinizialegriglia + cella;
    }
}


for(let righe = 0; righe < MatriceCampo.length; righe++){
    var rigagriglia = MatriceCampo[righe];
}

TetrisArea.height = cella * MatriceCampo.length;
TetrisArea.width = cella * rigagriglia.length;
TetrisArea.style.background = 'red';
TetrisArea.style.position = 'absolute';
TetrisArea.style.top = '50%';
TetrisArea.style.left = '50%';
TetrisArea.style.transform = 'translate(-50%, -50%)';

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
            var xposiniziale = ((rigagriglia.length / 2) - Math.floor(riga.length / 2)) * cella;
            console.log(xposiniziale);
            
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
        if ((this.ypos - 60) > TetrisArea.height) {
            this.ypos = TetrisArea.height - 60;
        }
    }

}

var update = function() {
    setTimeout(() =>{
        requestAnimationFrame(update);
    }, 100);
    ELtetris.clearRect(0, 0, window.innerWidth, window.innerHeight);
    disegnaarea();
    tetramino.movimento();
}

var tetramino = new Tetramino(this.xpos, this.ypos, this.width, this.height, this.colore, this.forma);
tetramino.createtramino();
update();