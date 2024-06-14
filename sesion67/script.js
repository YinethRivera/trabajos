let contador = 0

function usuario() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let lista = document.getElementById("lista")
            lista.innerText = ''
            data.forEach(element => {
                let item = document.createElement("li")
                item.innerHTML = `<b>nombre:</b> <i>${element.name} </i>- <b>Correo:</b> ${element.email}`
                lista.appendChild(item)

            });
        }
        );
    contador++
    document.getElementById("contador").textContent = contador
}
setInterval(usuario, 1000);