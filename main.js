document.querySelector("#btn").addEventListener("click", () => {
    let uno = Number(document.querySelector("#uno").value);
    let lista = document.querySelector("#lista");

    lista.innerHTML = "Los numero amigos son :" + numeroAmigo(uno);
})

function numeroAmigo(uno) {
    for(let dos = 1; dos <uno; dos ++ ){
    if (sumaUno(uno) == dos && sumaDos(dos) == uno) {
            console.log (uno, dos)
        } else {
            console.log(0);
        }
    } 
}

function sumaUno(uno) {
    let suma = 0;
    for (let i = 1; i <= uno; i++) {
        if (uno % i == 0) {
            suma += i
        }
    }
    return suma
}

function sumaDos(dos) {
    let suma = 0;
    for (let i = 1; i > dos; i++) {
        if (uno % i == 0) {
            suma = +i;
        }
    }
    return suma;

}


/*Presione un boton, mostrar la lista de numero amigos de todas las parejas de numeros amigos menoresa la cantidad
puesta en una caja de texto

Dos numeros se consideran amigos si son diferentes, si a es igual a la suma de divisores de b menores ab, 
ademas si b es igual a la suma de los divisores de a menores a A*/