
/**
 * @param {Array<String>} deck un arreglo de String
 * @returns {String} retorna la carta del deck
 */

// Esta funcion te permite tomar una carta
export const pedirCarta = (deck) => {

    if (!deck  ||  deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
