// Función para obtener la jugada de la máquina
function obtenerJugadaMaquina() {
    const opciones = ['piedra', 'papel', 'tijera'];
    // Genera un número aleatorio entre 0 y 2
    const indiceAleatorio = Math.floor(Math.random() * 3);
    // Devuelve la jugada correspondiente al índice aleatorio
    return opciones[indiceAleatorio];
}

// Función para determinar al ganador
function determinarGanador(jugadaUsuario, jugadaMaquina) {
    if (
        (jugadaUsuario === 'tijera' && jugadaMaquina === 'papel') ||
        (jugadaUsuario === 'papel' && jugadaMaquina === 'piedra') ||
        (jugadaUsuario === 'piedra' && jugadaMaquina === 'tijera')
    ) {
        return 'ganaste';
    } else if (jugadaUsuario === jugadaMaquina) {
        return 'empate';
    } else {
        return 'gano la maquina';
    }
}

// Solicitar al usuario las veces que desea repetir el juego
const vecesAJugar = parseInt(prompt('¿Cuántas veces deseas jugar contra la máquina?'));

// Ciclo para repetir el juego según la cantidad de veces indicada
for (let i = 0; i < vecesAJugar; i++) {
    // Solicitar al usuario su jugada
    const jugadaUsuario = prompt('Elige tu jugada: piedra, papel o tijera').toLowerCase();

    // Validar la jugada del usuario
    if (['piedra', 'papel', 'tijera'].includes(jugadaUsuario)) {
        // Obtener la jugada de la máquina
        const jugadaMaquina = obtenerJugadaMaquina();

        // Determinar al ganador
        const ganador = determinarGanador(jugadaUsuario, jugadaMaquina);

        // Mostrar el resultado
        alert(`La máquina eligió ${jugadaMaquina}. Resultado: ${ganador}`);

    } else {
        alert('Jugada inválida. Por favor, elige piedra, papel o tijera.');
        // Restar una iteración para volver a solicitar la jugada
        i--;
    }
}
