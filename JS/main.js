function agregarTarea() {
	let alumno = document.getElementById('alumno').value;
	let titulo = document.getElementById('titulo').value;
	let descripcion = document.getElementById('descripcion').value;
    
	let entrada = document.createTextNode(alumno + "-" +titulo +": " + descripcion);
	let elemento = document.createElement("div");
	elemento.appendChild(entrada);

	if (descripcion.length == 0) {
		alert("El formulario esta vacio.")
	} else {
		var publicaciones = document.getElementById("publicaciones");
		publicaciones.innerHTML += `<div class="borrar card mb-3">
									  <div class="card-body">
										  <h1>${titulo}</h1>
										  <h5>${alumno}</h3>
										<p>${descripcion}</p>
										<a href="#" onclick="alert('La tarea fue enviada!')" class="btn btn-info ml-5">ESTADO</a>
										<a href="https://www.google.com/search?q=${titulo}" target="_blank" class="btn btn-info ml-5">Googlear titulo relacionado</a>
										<button type="button" onclick="eliminar(this); return false;"class="btn btn-danger">Eliminar</button>
										</div>
									</div>`;
	
	}
}

function limpiarFormulario(){
	let formulario = document.getElementById('descripcion').value;
	document.getElementById('formulario').reset();

}

function eliminar(e){
	e.closest('.borrar').remove();
} 
