document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('Areadigioco');
    const context = canvas.getContext('2d');

    let giocoInCorso = false;

    let timerId;

    const cella = 35;
    const righe = canvas.height / cella;
    const colonne = canvas.width / cella;

    //creo campo
    const griglia = Array.from({length: righe}, ()=>Array(colonne).fill(0));
    
    //tetramini
    const tetramini = {
        O: [
            [1,1],
            [1,1]
        ],

        I: [
            [1,1,1,1]
        ],

        S: [
            [0,1,1],
            [1,1,0]
        ],

        Z: [
            [1,1,0],
            [0,1,1]
        ],

        L: [[1,0,0],
            [1,1,1]
        ],

        J: [
            [0,0,1],
            [1,1,1]
        ],

        T: [
            [0,1,0],
            [1,1,1]
        ],
    };

    //colori tetramini
    const colori = {
        O: "#e7f530",
        I: "#2980B9",
        S: "#C0392B",
        Z: "#16A085",
        L: "#F39C12",
        J: "#94c0dc",
        T: "#8E44AD",
    }


    //se premuto tasto space inizia il gioco
    window.addEventListener("keydown", (e) => {
        if((e.key == " " || e.code == "Space" || e.keyCode == "32") && !giocoInCorso) {
            giocoInCorso = true;
            //crea nuovo tetramino
            nuovoTetramino();
            //disegna tetramino
            timerId = setInterval(loop, 500);
        }
    });

    function nuovoTetramino() {
        //si recupera tutti i tetramini
        const arrayTetramini = Object.keys(tetramini);
        //seleziona un singolo tetramino random
        const letteraTetramino = arrayTetramini[Math.floor(Math.random() * arrayTetramini.length)];
        //creazione tetramino come oggetto
        tetraminoCorrente = {
            forma: tetramini[letteraTetramino],
            x: Math.floor(colonne / 2) - Math.floor(tetramini[letteraTetramino][0].length / 2),
            y: 0,
            letteraTetramino, //colore

        };
    };

    //funzione per continuare a generare tetramini
    function loop() {
        if(giocoInCorso) {
            disegna();
            muoviGiù();
        }
    }

    function disegna() {
        if(giocoInCorso) {
            disegnaBoard();
            disegnaTetramino(tetraminoCorrente.forma, tetraminoCorrente.x, tetraminoCorrente.y);
        }
    };

    //itera la griglia, se trova un valore diverso da 0 disegna quadratino colorato
    function disegnaBoard() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for(let y = 0; y < righe; y++) {
            for (let x = 0; x < colonne; x++) {
                if(griglia[y][x]) {
                    disegnaQuadratino(x, y, griglia[y][x]); //griglia[y][x] contiene parole tipo 'purple' 'green' per via della fusione
                }
            }
        }
    };

    function disegnaQuadratino(x, y, colore) {
        context.fillStyle = colore;
        context.fillRect(x * cella, y * cella, cella, cella);
        context.strokeStyle = "#333";
        context.strokeRect(x * cella, y * cella, cella, cella);
    };

    function disegnaTetramino(tetramino, spostamentoX, spostamentoY) {
        tetramino.forEach((riga, y) => {
            riga.forEach((valore, x) => {
                if(valore) {
                    disegnaQuadratino(x + spostamentoX, y + spostamentoY, colori[tetraminoCorrente.letteraTetramino])
                }
            })
        })
    };

    function rilevaCollisione(tetramino, spostamentoX, spostamentoY) {
        return tetramino.some((riga, y) => {
            return riga.some((valore, x) => {
                //se diverso da 0
                if(valore) {
                    const nuovaX = x + spostamentoX;
                    const nuovaY = y + spostamentoY;
                    // controlla : collisione lato sx, collisione lato dx, collisione fondo, collisione con blocco diverso da 0
                    //return la ferma appena una di queste condizioni è vera
                    if (nuovaX < 0 || nuovaX >= colonne || nuovaY >= righe || griglia[nuovaY][nuovaX] ) {
                    
                        return true;
                    }
                }
                return false;
            })
        })
    };

    // function rilevacCollisioneTetramini(tetramino, spostamentoX, spostamentoY) {
    //     tetramino.forEach((riga, y) => {
    //         riga.forEach((valore, x) => {
    //             if(valore) {
    //                 const prossimaX = x + spostamentoX;
    //                 const prossimaY = y + spostamentoY;
    //                 console.log('prossimX =', prossimaX, 'prossimaY =', prossimaY, griglia[prossimaY][prossimaX])
    //                 if (griglia[y + tetraminoCorrente.y][x + tetraminoCorrente.x] !== 0) {
    //                     console.log('rilevata collisione')
    //                     return true;
    //                 } 
    //             }
    //             return false;
    //         })
    //     })

    // };

    function muoviDx(){
        if(!rilevaCollisione(tetraminoCorrente.forma, tetraminoCorrente.x + 1, tetraminoCorrente.y)) {
             tetraminoCorrente.x++;
        }
    };
    function muoviSx(){
        if(!rilevaCollisione(tetraminoCorrente.forma, tetraminoCorrente.x - 1, tetraminoCorrente.y)) {
            tetraminoCorrente.x--;
        }
    };
    function muoviGiù(){
        if(!rilevaCollisione(tetraminoCorrente.forma, tetraminoCorrente.x, tetraminoCorrente.y + 1) ) {
            tetraminoCorrente.y++;
        } else {
            fusioneTetramino();
            nuovoTetramino();
        }
    };
    function ruota(){};

   

    function fusioneTetramino() {
        tetraminoCorrente.forma.forEach((riga, y) => {
            riga.forEach((valore, x) => {
                //se c'è un valore diverso da 0
                if(valore) {
                    console.log(colori[tetraminoCorrente.letteraTetramino])
                    //assegna alla cella corrispondente della griglia = colore del tetramino (purple, green, ecc)
                    griglia[y + tetraminoCorrente.y][x + tetraminoCorrente.x] = colori[tetraminoCorrente.letteraTetramino]; //???
                }
            })
        })
    };

    

    document.addEventListener("keydown", (e) => {
        if(giocoInCorso) {
            if(e.key === "ArrowLeft"){
                muoviSx();
            } else if(e.key === "ArrowRight"){
                muoviDx();
            } else if(e.key === "ArrowDown"){
                muoviGiù();
            }else if(e.key === "ArrowUp"){
                ruota();
            }
        }
    })
});