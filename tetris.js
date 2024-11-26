const TetrisArea = document.getElementById('Areadigioco');

var ELtetris = TetrisArea.getContext('2d');

TetrisArea.height = 700;
TetrisArea.width = 400;
TetrisArea.style.background = 'red';
TetrisArea.style.position = 'absolute';
TetrisArea.style.top = '50%';
TetrisArea.style.left = '50%';
TetrisArea.style.transform = 'translate(-50%, -50%)';


var matriceT = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
];

var matriceL = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

var matriceJ = [
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

var matriceI = [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
];

var matriceS = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
];

var matriceZ = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
];

var matriceC = [
    [1, 1],
    [1, 1],
];

var formetetramini = [matriceT, matriceL, matriceJ, matriceI, matriceS, matriceZ, matriceC];

var valorecasuale = Math.round(Math.random() * 6);





class Tetramino {
    constructor(xpos, ypos, width, height) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.width = width;
        this.height = height;
    }

    createtramino(matrice) {
    
        this.ypos = 0;
        this.width = 30;
        this.height = 30;
        
        for(let colonne = 0; colonne < matrice.length; colonne++){
        
            var colonna = matrice[colonne];
            this.xpos = 200 - (this.width * (matrice.length / 2));
            
            
            for(let righe = 0; righe < matrice[colonne].length; righe++){
                console.log(colonna[righe]);
                
                if(colonna[righe] === 1){
                    ELtetris.fillRect(this.xpos, this.ypos, this.width, this.height);
                }
        
                this.xpos = this.xpos + 30;
            }
        
            this.ypos = this.ypos + 30;
        }
    
    }

}

var tetramino = new Tetramino(this.xpos, this.ypos, 30, 30);
tetramino.createtramino(formetetramini[valorecasuale]);

//createtramino(formetetramini[valorecasuale]);