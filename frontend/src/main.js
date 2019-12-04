import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCharts from 'vue-chartjs'

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.component('line-chart',{
  extends: VueCharts.Bar,
  props: ['data', 'options', 'name'],
  mounted(){
    this.renderChart({
      labels: ['슛', '유효슛', '도움', '골', '드리블', '패스시도', '패스성공', '차단', '태클'],
      datasets: [
        {
          label: this.name,
          backgroundColor: '#f87979',
          data: this.data
        }
      ]
    }, this.options)
  }
})


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
