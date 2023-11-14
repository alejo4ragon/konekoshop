document.addEventListener("DOMContentLoaded", function () {
    var urlInput = document.getElementById("urlInput");
    var mostrarContenidosButton = document.getElementById("mostrarContenidosButton");
    var estadosPeticion = document.getElementById("estadosPeticion");
    var cabecerasHTTP = document.getElementById("cabecerasHTTP");
    var codigoEstado = document.getElementById("codigoEstado");
    var contenidos = document.getElementById("contenidos");

    mostrarContenidosButton.addEventListener("click", function () {
        var url = urlInput.value;

        if (!url) {
            alert("Por favor, introduce una URL válida.");
            return;
        }

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            // Estado de la petición
            estadosPeticion.textContent = "Estado de la petición: " + getStatusString(xhr.readyState);

            if (xhr.readyState === XMLHttpRequest.DONE) {
                // Cabeceras HTTP
                setTimeout(function () {
                    cabecerasHTTP.textContent = "Cabeceras HTTP:\n" + xhr.getAllResponseHeaders();
                }, 1000);

                // Código de estado
                setTimeout(function () {
                    codigoEstado.textContent = "Código de estado: " + xhr.status;
                }, 2000);

                // Contenidos
                setTimeout(function () {
                    contenidos.innerHTML = "Contenidos:\n" + xhr.responseText;
                }, 3000);
            }
        };

        // Iniciar la petición
        xhr.open("GET", url, true);

        setTimeout(function () {
            xhr.send();
        }, 1000);
    });

    function getStatusString(readyState) {
        switch (readyState) {
            case 0:
                return "No iniciada";
            case 1:
                return "Abierto";
            case 2:
                return "Cabeceras recibidas";
            case 3:
                return "Cargando";
            case 4:
                return "Completada";
            default:
                return "Desconocido";
        }
    }
});