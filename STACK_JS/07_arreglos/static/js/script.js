//Sumar elementos dentro de un bucle
function sumarElemento() {
        let ventas = [10000, 5000, 12000, 8000];
        let total = 0;

        for (let i = 0; i < ventas.length; i++) {
                total += ventas[i]; // += acumula
        }
        alert(`El resultado final es: ${total}`);
}

//Calcular promedio
function calcularPromedio() {
        let notas = [5.8, 6.2, 4.9, 6.5];
        let suma = 0;

        for (let i = 0; i < notas.length; i++) {
                suma += notas[i];
        }
        alert(`La suma acumulada es: ${suma}`)
        let promedio = suma / notas.length;
        alert(`El promedio de las notas: ${notas.join(' / ')}\nPromedio: ${promedio}`);
}

//Condiciones dentro de bucle 
function buscarMayoresEdad() {
        let edades = [12, 15, 18, 20, 25, 35, 50, 5];
        let mayores = [];
        for (let i = 0; i < edades.length; i++) {
                //condicion para buscar mayores de 18
                if (edades[i] >= 18) {
                        mayores.push(edades[i]); //añade la posicion que cumple la condicion
                }
        }
        alert(`De la lista de edades: ${edades.join(' / ')}. \nLos mayores son: ${mayores.join(' / ')}`)
}


// Encontrar el menor y el mayor
function buscarMayorMenor() {
        let numeros = [10, 35, 7, 90, 22, 90, 2];
        let menor = numeros[0];
        let mayor = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
                if (numeros[i] < menor) {
                        menor = numeros[i];
                } else if (numeros[i] > mayor) {
                        mayor = numeros[i];
                } else {
                        console.log(`Valor que no afecta: ${numeros[i]}`)
                }
        }
        alert(`De los numeros ${numeros.join(' / ')} 
El menor es: ${menor} 
El mayor es: ${mayor}`);
}
//Ejemplo completo
//Tarea: Unir los console.log en una alerta
//Eliminar el ultimo valor y mostrarlo.
//Añadir dos valores nuevos con .push (prompt)
//Contar cantidad de ventas mayores que 10.000
function calcularVentas() {
        let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
        let total = 0;
        let mayores = [];
        let contadorVentas = 0;
        let mayor = ventas[0];
        let valorEliminado = ventas.pop();
        let valor1 = parseInt(prompt("Ingrese primer valor:"))
        let valor2 = parseInt(prompt("Ingrese segundo valor:"))
        ventas.push(valor1, valor2);
        for (let i = 0; i < ventas.length; i++) {
                total += ventas[i];
                if (ventas[i] > mayor) {
                        mayor = ventas[i];
                        if(ventas[i] >= 10000){
                                mayores.push(ventas[i])
                                contadorVentas++;
                        }
                }
        }
        
        alert(`Total ventas: ${total}\nMayor: ${mayor}
        Promedio: ${total / ventas.length} 
        Valores sobres $10.000: ${mayores.join(' / ')}
        Conteo de mayores: ${contadorVentas} ventas
        Valor Eliminado: ${valorEliminado} `);
}
