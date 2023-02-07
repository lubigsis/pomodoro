let canvas; 
let x, y, r, g, b;
//Lo de abajo es para que el canvas se use de fondo y se acomode al tamaño de la pantalla.
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas= createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    frameRate(5);
    randomSeed(5);
    background(0);
  }
  
 
  //--------------------------------------------

  function draw(){
    r= random(0, 255);
    g= 0;
    b= random(0, 255);
    x= random(width);
    y= random(height);

    noStroke();
    fill(r, g, b, 100);
    circle(x, y, 10);
  }

  //agregar mousePressed o alguna condición
  //falta: agregar fecha y hora y hacer que funcione la app.
  //Mejorar estilos CSS- Responsive Design.
