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

for(let righe = 0; righe < MatriceCampo.length; righe++){
        
    var riga = MatriceCampo[righe];
    
    for(let colonne = 0; colonne < MatriceCampo[righe].length; colonne++){

    }

}

var cella = 30;

TetrisArea.height = cella * MatriceCampo.length;
TetrisArea.width = cella * riga.length;
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
    }

    createtramino() {
        this.width = cella;
        this.height = cella;
        this.forma = (formetetramini[valorecasuale]);
        this.colore = (coloretramini[valorecasuale]);
        ELtetris.fillStyle = this.colore;
        var altezzatetramino = 0;
        
        for(let righe = 0; righe < this.forma.length; righe++){
            var riga = this.forma[righe];
            var xposiniziale = (TetrisArea.width / 2) - (this.width * (this.forma.length / 2));
            
            for(let colonne = 0; colonne < this.forma[righe].length; colonne++){
                
                if(riga[colonne] === 1){
                    ELtetris.fillRect(xposiniziale, this.ypos, this.width, this.height);
                }
        
                xposiniziale = xposiniziale + cella;
            }

            function allValuesEqualTo(riga) {
                return riga.every(value => value === 0);
            }

            if(allValuesEqualTo(riga) == false){
                this.ypos = this.ypos + cella;
                var altezzatetramino = altezzatetramino + cella;
            }
        }

        console.log(altezzatetramino);
    
    }

    movimento(){
        this.createtramino();

        if ((this.ypos) > TetrisArea.height) {
            this.ypos = TetrisArea.height;
        }

        this.ypos -= cella;
    }

}

var update = function() {
    setInterval(() => {
        requestAnimationFrame(update);
    }, 100);
    
    ELtetris.clearRect(0, 0, window.innerWidth, window.innerHeight);
    tetramino.movimento();
}
var tetramino = new Tetramino(this.xpos, 0, this.width, this.height, this.colore, this.forma, 0.2);
tetramino.createtramino();
update();