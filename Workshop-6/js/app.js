/**
 * funcion que procesa los datos del formulario y los mete
 * en objecto que almacena los usuarios en arreglos de 
 * objectos
 */
function processData() {
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;

    var person = [{
        name,
        lastname,
        phone
    }]
    sendDataBase('person', person);
}

/**
 * funcion que envia los datos prepardos al archivo database
 * @param {*} nameObject nombre del objecto
 * @param {*} key que se usara para indentificar el objecto almacenado
 */
function sendDataBase(nameObject, key) {
    var errorAlert = document.getElementById('alert');
    if (thereIsAnObject(nameObject)) {
        if (!saveToLocalStorage(nameObject, key)) {
            errorAlert.innerHTML = 'Error al registrar el primero usuario';
            errorAlert.setAttribute("style", "color:red; display:block;");
        } else {
            errorAlert.innerHTML = 'Primer usuario registrado exitosamente';
            errorAlert.setAttribute("style", "color:#000; display:block;");
        }
    } else {
        var temp = getFromLocalStorage(nameObject);
        temp.push(key);
        saveToLocalStorage(nameObject, temp);
        errorAlert.innerHTML = 'Usuario registrado exitosamente';
        errorAlert.setAttribute("style", "color:#000; display:block;");
    }
    document.getElementById('form').reset();
}

/**
 * funcion que dispara los eventos
 */
function bindEvents() {
    document.getElementById('register-button').addEventListener('click', processData);
}

bindEvents();