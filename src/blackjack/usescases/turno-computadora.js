
import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * 
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora HTML para mostrar las cartas
 * @param {Arrayt<String>} deck 
 */


// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck) => {
    
    if( !puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if( !deck ) throw new Error('El deck es necesario');
    if( !puntosHTML ) throw new Error('Puntos HTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}