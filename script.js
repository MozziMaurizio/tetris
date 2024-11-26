let canvas = document.getElementById('canvas-dom');
let context = canvas.getContext('2d');


//                 -
//             .
//             .
//    -        .           +
//     ..................        
//             .
//             .
//             .
//                +
canvas.style.background = '#ae4'

let canvasWidth = 400;
let canvasHeight = 400;                                       

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let counter = 0

class Circle {
    constructor(xpos, ypos, radius, color, text, speed) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }

    draw(context) {
        context.beginPath();
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial"
        context.strokeStyle = this.color;
        context.fillText(this.text, this.xpos, this.ypos);
        context.lineWidth = 2;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();

    }

    update() {
        this.text = counter;

        
        this.draw(context);

        if ((this.xpos + this.radius) > canvasWidth) {
            this.dx = -this.dx;
            counter++
        }

        //this.xpos - this.radius calcola la posizione del bordo sx del cerchio
        if ((this.xpos - this.radius) < 0) {
            this.dx = -this.dx;
            counter++

        }

        if ((this.ypos + this.radius) > canvasHeight) {
            this.dy = -this.dy;
            counter++

        }

        if ((this.ypos - this.radius) < 0) {
            this.dy = -this.dy;
            counter++

        }

        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}

class ShapeGroup {
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    draw(context) {
        this.shapes.forEach(shape => {
            shape.draw(context);
        })
    }
}

class SingleShape {
    constructor(x, y, width, height, anticlockwise) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.clock = anticlockwise;
    }

    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class SingleShapeArc {
    constructor(x, y, radius, startAngle, endAngle, anticlockwise) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.anticlockwise = anticlockwise;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
        context.lineWidth = 2;
        context.stroke();
        context.closePath();
    }
}

let shapeGroup = new ShapeGroup();

shapeGroup.addShape(new SingleShape(239, 151, 1.6, 100));
shapeGroup.addShape(new SingleShape(150, 150, 1.6, 100));
shapeGroup.addShape(new SingleShape(195, 105, 1.6, 30));

shapeGroup.addShape(new SingleShapeArc(150, 300, 50, 0 , 3 * Math.PI / 2 , false));
shapeGroup.addShape(new SingleShapeArc(250, 300, 50, Math.PI , 260 * Math.PI / 180, true));
shapeGroup.addShape(new SingleShapeArc(195.5, 151, 44, 0, Math.PI, true));



// let drawPines = function drawPines() {
//     context.fillRect(239, 151, 1.6, 100);
//     context.fillRect(150, 150, 1.6, 100);
//     context.fillRect(195, 105, 1.6, 30);
    
    
    
    
//     context.beginPath();
//     context.lineWidth = 2
//     context.arc(150, 300, 50, 0 , 3 * Math.PI / 2 , false);
//     context.stroke();
//     context.closePath();
    
    
    
//     context.beginPath();
//     context.arc(250, 300, 50, Math.PI , 260 * Math.PI / 180, true)
//     context.stroke(); 
//     context.closePath();
    
//     context.beginPath( );
//     context.arc(195.5, 151, 44, 0, Math.PI, true)
//     context.stroke();
//     context.closePath();
// }



let updateFunction = function() {
    requestAnimationFrame(updateFunction);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // drawPines();
    shapeGroup.draw(context);
    circle1.update();
    circle2.update();

    if (getDistance(circle1.xpos, circle1.ypos, circle2.xpos, circle2.ypos) < circle2.radius + circle1.radius ) {
        circle2.color = "red"
    } else if (getDistance(circle1.xpos, circle1.ypos, circle2.xpos, circle2.ypos) >= circle2.radius + circle1.radius ) {
        circle2.color = "black"
    }
}

let getDistance = function(xpos1, ypos1, xpos2, ypos2) {
    var result = Math.sqrt(Math.pow(xpos2 - xpos1, 2) + Math.pow(ypos2 - ypos1, 2));
    return result;
}


let circle1 = new Circle(199, 85, 20, "black", 0, 4)
let circle2 = new Circle(190, 185, 130, "black", 0, 0 )
circle1.draw(context);
circle2.draw(context);

console.log(getDistance(circle1.xpos, circle1.ypos, circle2.xpos, circle2.ypos ));


updateFunction();





//in Javascript non si utilizzano i gradi ma i radianti radianti = gradi x PI / 180  oppure in javascript gradi + Math.PI / 180
//MAth.pow si usa per calcolare la potenza di un numero Math.pow(base, esponente)
//MAth.sqrt calcola la radice quadrata di un numero 
//Formula distanza = radice di (x2 - x1) ^ 2 + (y2 - y1) ^ 2