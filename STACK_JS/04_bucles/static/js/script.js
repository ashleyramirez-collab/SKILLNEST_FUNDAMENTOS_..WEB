console.log("Prueba de conexion con js...");

/* Ejemplo Bucle for */
function contarHasta5() {
    for (let i = 1; i <= 5; i++) {
        alert(i);

    }
}
function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}
function recorrerLista() {
    //Lista es un tipo de dato (array/lista/arreglos)
    // [] = ["nombre", 4, true, [2,4]]
    /*
    let nombre = "Carlos";
    alert (nombre);
                        0       1
    let nombres = ["Carlos", "Maria"]
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres[1]) --> Imprime María
    alert(nombres[0].length); --> 6
    alert(nombres.length); --> 2 (largo nombres)
    */
    let usuarios = ["Ana", "Luis", "María", "luz"];
    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}
/* Ejemplo Bucle while */
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}
function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}

function validarContrasena() {
    let contraseñaCorrecta = false;
// !variables = variable es distinta a verdadera - dentro de una condición
    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
            break; 
            alert("No se ejecutara");  
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}

