// alert('Words');

//Evento Submit

//console.log(document.getElementById('formTask'))
document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
	//console.log()

	let title = document.getElementById('title').value;
	let description = document.getElementById('description').value;

	const task = {
		title, //title: title,
		description //description: description
	};

	//console.log(task);

	//Almaceno localmente los datos en el Browser
	//localStorage.setItem('tasks', JSON.stringify(task));

	//Obtengo los datos del Browser
	
	//Devuelve como Sting
	//console.log(localStorage.getItem('tasks'))

	//Devuelve como Objeto
	//console.log(JSON.parse(localStorage.getItem('tasks')))

	//Almacenando los Datos
	if (localStorage.getItem('tasks') === null) {
		let tasks = [];
		tasks.push(task);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	} else {
		let tasks = JSON.parse(localStorage.getItem('tasks'));
		tasks.push(task);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	getTasks(); //Obtengo los datos al precionar Save
	//Blanqueo el Formulario
	document.getElementById('formTask').reset();
	document.getElementById('title').focus();

	e.preventDefault();
}

function getTasks(){
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	let tasksView = document.getElementById('tasks');
	
	tasksView.innerHTML = '';

	for (let i = 0;  i < tasks.length; i++) {
		 //console.log(tasks[i]) //Lo listo en Consola al refrescar
		 let title = tasks[i].title;
		 let description = tasks[i].description;

		// --> `` //Alt Gr + }
		tasksView.innerHTML += `<div class = "card mb-3">
		 	<div class="card-body"> 
		 		<p>${title} - ${description}</p>
		 		 <a class="btn btn-danger" onclick="deleteTasks('${title}')">Delete</a>
		 	</div>
		 </div>`
	}
	document.getElementById('title').focus();
}

function deleteTasks(title){
	//console.log('Eliminar: ' + title)
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	for (var i = 0; i < tasks.length; i++) {
		if (tasks[i].title == title){
			tasks.splice(i, 1); //Elimino la Tarea desde el Arreglo
		}
	}
	localStorage.setItem('tasks', JSON.stringify(tasks));
	getTasks();
}

getTasks();