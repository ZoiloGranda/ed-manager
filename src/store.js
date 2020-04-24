import { createStore } from 'redux';

const initialState = {
 jugadores: [{
   id: 1,
   nombre: 'Zidane',
   foto: 'https://api.adorable.io/avatars/100/zidane.png'
  }, {
   id: 2,
   nombre: 'Juan Arango',
   foto: 'https://api.adorable.io/avatars/100/juan.png'
  }, {
   id: 3,
   nombre: 'Roberto Carlos',
   foto: 'https://api.adorable.io/avatars/100/roberto.png'
  }, {
   id: 4,
   nombre: 'Pele',
   foto: 'https://api.adorable.io/avatars/100/pele.png'
  }, {
   id: 5,
   nombre: 'Oliver Kahn',
   foto: 'https://api.adorable.io/avatars/100/oliver.png'
  }, {
   id: 6,
   nombre: 'Ronaldo',
   foto: 'https://api.adorable.io/avatars/100/ronaldo.png'
  }, {
   id: 7,
   nombre: 'Figo',
   foto: 'https://api.adorable.io/avatars/100/figo.png'
  }, {
   id: 8,
   nombre: 'Ronaldinho',
   foto: 'https://api.adorable.io/avatars/100/ronaldinho.png'
  }, {
   id: 9,
   nombre: 'Klose',
   foto: 'https://api.adorable.io/avatars/100/klose.png'
  }, {
   id: 10,
   nombre: 'Hierro',
   foto: 'https://api.adorable.io/avatars/100/hierro.png'
  }, {
   id: 11,
   nombre: 'Maradona',
   foto: 'https://api.adorable.io/avatars/100/maradona.png'
  }, {
   id: 12,
   nombre: 'Ibrahimovic',
   foto: 'https://api.adorable.io/avatars/100/ibrahimovic.png'
  }, {
   id: 13,
   nombre: 'Eto\'o',
   foto: 'https://api.adorable.io/avatars/100/etoo.png'
  }, {
   id: 14,
   nombre: 'Messi',
   foto: 'https://api.adorable.io/avatars/100/messi.png'
  }, {
   id: 15,
   nombre: 'Taffarel',
   foto: 'https://api.adorable.io/avatars/100/taffarel.png'
  }

 ],
 titulares: [],
 suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
 console.log(action);
 if (action.type === 'AGREGAR_TITULAR') {
  return {
   ...state,
   titulares: state.titulares.concat(action.jugador),
   jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
  }
 }
 if (action.type === 'AGREGAR_SUPLENTE') {
  return {
   ...state,
   suplentes: state.suplentes.concat(action.jugador),
   jugadores: state.jugadores.filter(jugador => jugador.id !== action.jugador.id)
  }
 }
 if (action.type === 'QUITAR_TITULAR') {
  return {
   ...state,
   titulares: state.titulares.filter(titular => titular.id !== action.titular.id),
   jugadores: state.jugadores.concat(action.titular)
  }
 }
 if (action.type === 'QUITAR_SUPLENTE') {
  return {
   ...state,
   suplentes: state.suplentes.filter(suplente => suplente.id !== action.suplente.id),
   jugadores: state.jugadores.concat(action.suplente)
  }
 }

 return state

}

export default createStore(reducerEntrenador)