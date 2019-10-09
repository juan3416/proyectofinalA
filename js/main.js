// Obtener usuarios completos

async function obtenerPersona() {
    let response = await fetch('https://swapi.co/api/people')
    let data = await response.json()
    return data
}

async function cargarUsers() {
    let lista = `<ul class="list-group list-group-flush" >
    <li class="list-group-item text-center"> <h4>Nombres de personajes</h4></li>`
    let persona = await obtenerPersona()
    let arreglo = persona.results
    for (let i = 0; i < arreglo.length; i++) {
        lista += `<li class="list-group-item">${arreglo[i].name}</li>`
    }
    lista += `</ul>`
    return lista
}

async function main() {
    let lista = await cargarUsers()
    document.getElementById("userarr").innerHTML = lista
}

// Final de obtener usuarios completos

// Obtener persona por id


window.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        let id = document.getElementById("id").value;
        User(id)
    }
}, false);

async function User(id) {
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    let data = await response.json()
    let obj = data.data
    var elemento = document.getElementById("userimg")
    if (obj) {
        elemento.innerHTML = `
        <div class="card" style="width: 22rem;">
        <img src="${obj.avatar}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5>Nombre: <span class="font-weight-normal">${obj.first_name}</span></h5>
                <h5>Apellido: <span class="font-weight-normal">${obj.last_name}</span></h5> 
                <h5>E-mail: <span class="font-weight-normal">${obj.email}</span></h5> 
            </div>
        </div>`
    } else {
        elemento.innerHTML = `<div class="alert alert-danger" role="alert">
        No se encuentra el usuario
      </div>`
    }
}

// Selectores

var color1 = document.querySelector('#color1')
var color2 = document.querySelector("#color2")
btncol1.addEventListener('click', function() {
    cambiarColor1();
});

btncol2.addEventListener('click', function() {
    cambiarColor2();
})

btncol3.addEventListener('click', function() {
    cambiarColor3();
})

function cambiarColor1() {
    let obj = color1.classList
    if (obj.contains('bg-primary')) {
        obj.remove('bg-primary');
        obj.add('bg-warning');
    } else {
        obj.remove('bg-warning');
        obj.add('bg-primary');
    }
    return true;
}

function cambiarColor2() {
    let obj = color2.classList
    if (obj.contains('bg-danger')) {
        obj.remove('bg-danger');
        obj.add('bg-primary');
    } else {
        obj.remove('bg-primary');
        obj.add('bg-danger');
    }
    return true;
}

function cambiarColor3() {
    let obj = color3.classList
    if (obj.contains('bg-success')) {
        obj.remove('bg-success');
        obj.add('bg-danger');
    } else {
        obj.remove('bg-danger');
        obj.add('bg-success');
    }
    return true;
}

// Letra color

var letras = document.getElementsByClassName('segmento2')

function colorLetras() {
    for (let i = 0; i < letras.length; i++) {
        letras[i].style.color = 'blue';
        letras[i].style.fontSize = '23px';
    }
}