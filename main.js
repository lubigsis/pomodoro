/*--------------------------------------------------defino variables--------------------*/
let tasks = []; //p/almacenar las tareas q' el user escriba.
let time = 0; //p/la cuenta regresiva.
let timer = null;
let timerBreak = null;
let tareaActual = null;

/*-------------------------------------------------obtengo el id del form-----------------------*/

let bAdd = document.querySelector("#bAdd.JS");
let itTask = document.querySelector("#itTask.JS");
let form = document.querySelector("#formulario.JS");


/*----------------------------------------------------------------------------FUNCIONES---------------*/

function createTask(value){

    const nuevaTarea = {
        id: (Math.random() * 100).toString(36).slice(2),
        titulo: value,
        completado: false,
    };

    //lo agrego al array 'task[]'
     tasks.unshift(nuevaTarea);

}

function renderizarTareas(){ //p/tomar c/u de los elementos de task[] y generar un HTML p/colocar en un contenedor.

    const html = tasks.map((task) =>  {
        return `
        <div class="task">
            <div class="completed">${task.completado
                ? "<span class='done'>Done</span>"
                : `<button class="start-button" data-id="${task.id}">Start</button></div>`
            }
                <div class="title">${task.titulo}</div>
        </div>`;
  });
        const tasksContainer = document.querySelector('#tareasAgregadas.JS');
        tasksContainer.innerHTML = html.join('');
   
}

/*------------------------------------------------------------------------------------------------------*/

form.addEventListener('submit', e =>{
    e.preventDefault(); /*p/q' cuando enviemos el formulario, realmente no se mande*/

    if (itTask.value !== ''){
        createTask(itTask.value);
        itTask.value = '';

        renderizarTareas();
    }
})





/*---------------------------------------------------------------------------------------INFO.---------------*/
//Map(); para cada iteración le hago una operación: pOr ejemplo:
/*
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

*/