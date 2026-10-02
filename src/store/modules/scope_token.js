import _ from "lodash";
import authAPI from "./../../api/auth-api";
import * as types from "./../mutation-types";
import { Log, Utils } from "./../../helpers";

const {Store} = require('yayson')()
const store = new Store()

// initial state
const state = {
  records: {},
  generation: 0
}

// getters
const getters = {
  // getByName: (state) => (name) => {
  //   return _.get(state.records, name, null)
  // },
}

// actions
const actions = {
  // #TODO - replace name with { name, scopes }, so that get scope_token for several scopes at once
  // #TODO - for now, it calls scope token API directly , not through vuex store.
  get ({dispatch, commit, state}, name) {
    return new Promise((resolve, reject) => {
      let token = _.get(state.records, name, null)
      // console.log(name, token)
      const expiresAt = token && token.token && Date.parse(token.token.expires_at)
      if (token && token.accessToken && Number.isFinite(expiresAt) && expiresAt > Date.now()) {
        // Log.put('scope_token/get stored', name, token)
        resolve(token)
      } else {
        dispatch('update', name).then(
          res => {
            token = _.get(state.records, name, null)
            // Log.put('scope_token/get new', name, token)
            resolve(token)
          },
          err => {
            // dispatch('auth/logout', {}, { root: true }).then(res => {
            //   console.log('scope_token force logout ...', this.$router)
            //   reject(err)
            // })
            reject(err)
          }
        )
      }
    })
  },

  update ({commit, state}, name) {
    const generation = state.generation
    return new Promise((resolve, reject) => {
      authAPI.scopeToken({
        name: name,
        scopes: [name]
      }, res => {
        if (state.generation !== generation) {
          reject(new Error('The session changed while requesting an API token'))
          return
        }
        if (res.status == 200) {
          commit(types.SCOPE_TOKEN_UPDATE, { name: name, record: res.body })
          resolve(res.body)
        } else {
          Log.put('scope_token/update res', res)
          reject(res)
        }
      }, err => {
        Log.put('scope_token/update err', err)
        reject(err)
      })
    })
  }
}

// mutations
const mutations = {
  [types.SCOPE_TOKEN_CLEAR_ALL] (state) {
    state.records = {}
    state.generation += 1
  },

  [types.SCOPE_TOKEN_UPDATE] (state, {name, record}) {
    _.set(state.records, name, record)
  },
}

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations
}