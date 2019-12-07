import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCharts from 'vue-chartjs'

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.component('bar-chart',{
  extends: VueCharts.Bar,
  props: ['data', 'options', 'name','background_value'],
  mounted(){
    this.renderBarChart();
  },
  computed: {
    chart_bg: function(){
      var bg =[];
      for(var i=0;i<this.data.length;i++){
        var color = "rgb(0,188,229)";
        bg.push(color);
      }
      for(var j=0;j<this.background_value.length;j++){
        bg[this.background_value[j]] = "red";
      }
      return bg;
    }
  },
  methods: {
    renderBarChart: function(){
    this.renderChart({
      labels: ['슛', '유효슛', '도움', '골', '드리블', '패스시도', '패스성공', '차단', '태클'],
      datasets: [
        {
          label: this.name,
          data: this.data,
          backgroundColor: this.chart_bg,
        }
      ],
    }, this.options)
    }
  }
})


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
