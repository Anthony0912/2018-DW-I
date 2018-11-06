function signinUser() {
    var person = new Object();
    person.name = document.getElementById('name').value;
    person.lastname = document.getElementById('lastname').value;
    person.cellphone = document.getElementById('cellphone').value;
    person.username = document.getElementById('username').value;
    person.password = document.getElementById('password').value;

    localStorage.setItem('person', JSON.stringify(person));
    
    /* 
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var cellphone = document.getElementById('cellphone').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    localStorage.setItem('name', name);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('cellphone', cellphone);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    */
}