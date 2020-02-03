import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async searchPlayerInfo({},{playerName}){
      const res = await axios.get(`/api/${playerName}`)
      return res.data
    },

    async searchTopRecord({},{spid}){
      const res = await axios.get(`/top_record/${spid}`)
      return res.data
    },

    async searchPositionTop3({},{spidPosition}){
      const res = await axios.get(`/compare/${spidPosition}`)
      return res.data
    },

    async fetchComment({},{spid}){
      const res = await axios.get(`/top_record/${spid}/comment`)
      return res.data
    },

    async findPlayerName({},{spid}){
      const res = await axios.get(`/find/${spid}`)
      return res.data
    },

  },
  modules: {
  }
})
