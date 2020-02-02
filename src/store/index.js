import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        swearwords: [],
        deletedWords: ['[УДАЛЕНО]', '[ДАННЫЕ УДАЛЕНЫ]']
    },
    mutations: {
        setSwearwords(state, payload) {
            state.swearwords = payload
        }
    },
    actions: {
        getSwearwords({commit}) {
            fetch('https://raw.githubusercontent.com/RonnyTod/deleted-project-data/master/swearwords.json')
                .then(response => response.json())
                .then(json => {
                    commit('setSwearwords', json)
                })
        }
    },
    modules: {}
});