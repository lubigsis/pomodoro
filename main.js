/*--------------------------------------------------defino variables--------------------*/
const tasks = []; //p/almacenar las tareas q' el user escriba. Va a contener elementos q' son objetos.
let time = 0; //p/la cuenta regresiva.
let timer = null;
let timerBreak = null;
let tareaActual = null;

/*-------------------------------------------------obtengo referencia de elementos HTML-----------------------*/

const bAdd = document.getElementById("bAdd.JS");
const itTask = document.getElementById("itTask.JS");
const form = document.getElementById("formulario.JS");


/*----------------------------------------------------------------------------FUNCIONES---------------*/

function createTask(value){

    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false,
    };
    //lo agrego al array 'tasks[]'
     tasks.unshift(newTask);
}


function renderizarTareas(){ //p/tomar c/u de los elementos de tasks[] y generar un HTML p/colocar en un contenedor.
    const html = tasks.map((task) =>  {
        return `
        <div class="task">
            <div class="completed">${task.completed ? `<span class="done">Done</span>` : 
            `<button class="start-button" data-id="${task.id}">Start</button>`}</div>
            <div class="title">${task.title}</div>
        </div>
        `;
  });
        const tasksContainer = document.querySelector('#tasks');
        tasksContainer.innerHTML = html.join('');
   
}

/*------------------------------------------------------------------------------------------------------*/


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    if (itTask.value !== '') {
      createTask(itTask.value);
      itTask.value = '';

      renderizarTareas();
    }
  });





/*---------------------------------------------------------------------------------------INFO.---------------*/
//Map(); para cada iteración le hago una operación: pOr ejemplo:
/*
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

*/