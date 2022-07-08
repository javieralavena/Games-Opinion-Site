import Vue from 'vue'
import Vuex from 'vuex'
import games from './games.json'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    games,
    opiniones: []
  },
  getters: {

  },
  mutations: {

    GUARDAR_OPINION: (state, opinionJuego) => {
      const nuevasOpiniones = { user: opinionJuego.nombre, opinion: opinionJuego.opinion, game: opinionJuego.nombreGame }
      state.opiniones.push(nuevasOpiniones)
      console.log(state.opiniones)

    },
    
    ELIMINAR_OPINION: (state, index) => {
      state.opiniones.splice(index, 1);
    },

    EDITAR_OPINION: (state, EditarOpinion) => {
      state.opiniones[EditarOpinion.id] = EditarOpinion
      console.log(EditarOpinion)
    },

  },
  actions: {
    guardaropinion: ({ commit }, opinionJuego) => {
      commit('GUARDAR_OPINION', opinionJuego)
    },

    eliminaropinion: ({ commit }, index) => {
      commit('ELIMINAR_OPINION', index)
    },

    editaropinion: ({ commit }, EditarOpinion) => {
      commit('EDITAR_OPINION', EditarOpinion)
    }

  }
})

export default store
