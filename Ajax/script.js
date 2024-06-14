document.getElementById("loadDataBtn").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var users = JSON.parse(xhr.responseText);
                displayUserData(users);
            } else {
                console.error("Error al cargar datos:", xhr.status);
            }
        }
    };
    xhr.send();
});

function displayUserData(users) {
    var userDataDiv = document.getElementById("userData");
    userDataDiv.innerHTML = ""; // Limpiamos el contenido anterior
    
    users.forEach(function(user) {
        var userDiv = document.createElement("div");
        userDiv.textContent = "Nombre: " + user.name + ", Email: " + user.email;
        userDataDiv.appendChild(userDiv);
    });
}


