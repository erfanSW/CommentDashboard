import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function ( /* { ssrContext } */ ) {
  const Store = new Vuex.Store({
    modules: {},
    plugins: [createPersistedState()],
    state: {
      token: null,
      user: null,
      isUserLoggedIn: false
    },
    mutations: {
      setToken(state, token) {
        state.token = token
        if (token) {
          state.isUserLoggedIn = true
        } else {
          state.isUserLoggedIn = false
        }
      },
      setUser(state, user) {
        state.user = user
      }
    },
    actions: {
      setToken({
        commit
      }, token) {
        commit('setToken', token)
      },
      setUser({
        commit
      }, user) {
        commit('setUser', user)
      }
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
