
let amigos = [];


function agregarAmigo() {
  // Obtener el valor del campo de entrada
  const input = document.getElementById("inputAmigo");
  const nombre = input.value.trim();

  // Validar la entrada
  if (!nombre) {
    alert("Por favor, inserta un nombre.");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Limpiar el campo de texto
  input.value = "";

  // Actualizar la lista en la pantalla
  actualizarLista();
}

// 3. Implementar la función para actualizar la lista de amigos
function actualizarLista() {
  // Obtener el elemento de la lista (ul)
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista actual
  lista.innerHTML = "";

  // Recorrer el array y crear un <li> para cada nombre
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// 4. Implementar la función para sortear un amigo
function sortearAmigo() {
  // Validar que haya al menos un nombre en la lista
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Generar un índice aleatorio basado en la longitud del array
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // 5. Mostrar el resultado en pantalla
  const resultado = document.getElementById("resultado");
  resultado.textContent = "El amigo secreto es: " + amigoSorteado;
}

