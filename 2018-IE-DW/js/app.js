function objectoCarrera() {
    let codigoCarrera = $('#code').val();
    let nombreCarrera = $('#carrer').val();

    const carrera = {
        codigoCarrera,
        nombreCarrera
    }
    return carrera;
}

function objectoCurso() {
    const carreras = getFromLocalStorage('carreras');
    let carrera = {};
    let nombreCurso = $('#nombreCurso').val();
    let cantCreditos = $('#cantCreditos').val();

    const curso = {
        carrera,
        nombreCurso,
        cantCreditos
    }
    return curso;
}

function limpiarFormulario() {
    document.getElementById('form').reset();
}

function guardarCarrera() {
    const carrera = objectoCarrera();
    if (addItemsToTheArray('carreras', carrera)) {
        console.log('Carrera guarda...');
        limpiarFormulario();
        const carreras = getFromLocalStorage('carreras');
        mostrarTablaCarrera('carrera', carreras);
    }
}

function mostrarTablaCarrera(tableName, tableData) {
    if (tableData && tableName) {
        let table = $(`#${tableName}_table`);
        let rows = "";
        tableData.forEach(element => {
            let row = `<tr><td>${element.codigoCarrera}</td><td>${element.nombreCarrera}</td>`;
            row += `<td> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="mostrarCarreraEditar(this)" data-id="${element.codigoCarrera}" data-entity="${tableName}">Editar</button></td>
                    <td><button type="button" class="btn btn-primary" data-toggle="modal" onclick="eliminarCarrera(this);" data-id="${element.codigoCarrera}" data-entity="${tableName}">Eliminar</button></td>`;
            rows += row + '</tr>';
        });
        table.html(rows);
    }
}

function buscarCarrera(codigoCarrera, carreras) {
    if (carreras) {
        return carreras.find(element => element.codigoCarrera == codigoCarrera);
    }
}

function mostrarCarreraEditar(element) {
    const object = $(element).data();
    let carreras = getFromLocalStorage('carreras');
    let carrera = buscarCarrera(object.id, carreras);
    $('#codigoEdit').val(carrera.codigoCarrera);
    $('#carreraEdit').val(carrera.nombreCarrera);
}

function carreraEditar() {
    let codigo = $('#codigoEdit').val();
    let carrera = $('#carreraEdit').val();
    const carreras = getFromLocalStorage('carreras');
    carreras.forEach(element => {
        if (element.codigoCarrera == codigo) {
            element.nombreCarrera = carrera;
        }
    });
    removeKeyLocalstorage('carreras');
    saveToLocalStorage('carreras', carreras);
    cargarTablaCarrera('carrera');
}

function eliminarCarrera(element) {
    const object = $(element).data();
    let carreras = getFromLocalStorage('carreras');
    carreras.forEach((element, index) => {
        if (element.codigoCarrera == object.id) {
            carreras.splice(index, 1);
        }
    });
    removeKeyLocalstorage('carreras');
    saveToLocalStorage('carreras', carreras);
    cargarTablaCarrera('carrera');
}

function cargarCarrerasComboBox() {
    let combo = $('#carreras');
    let rows = "";
    const carreras = getFromLocalStorage('carreras');
    if (carreras) {
        carreras.forEach(element => {
            rows += `<option change="seleccionarCarrera(this)" data-id="${element.codigoCarrera}" data-entity="${combo}">${element.nombreCarrera}</option>`;
        });
        combo.html(rows);
    }
}

function guardarCurso() {
    
}

function seleccionarCarrera(element) {
    const object = $(element).data();
    console.log(object);
}
function cargarTablaCarrera(tableName) {
    const carreras = getFromLocalStorage('carreras');
    mostrarTablaCarrera(tableName, carreras);
}

function bindEvents() {
    jQuery('#btn_crear_carrera').bind('click', (element) => {
        guardarCarrera();
    });
    jQuery('#btn_editar_carrera').bind('click', (element) => {
        carreraEditar();
    });
}

bindEvents();
cargarTablaCarrera('carrera');
cargarCarrerasComboBox();