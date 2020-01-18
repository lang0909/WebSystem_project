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
  data(){
    return{
      position:['GK', 'SW', 'RWB', 'RB', 'RCB', 'CB', 'LCB', 'LB', 'LWB',
    'RDM', 'CDM', 'LDM', 'RM', 'RCM', 'CM', 'LCM', 'LM', 'RAM', 'CAM', 'LAM',
    'RF', 'CF', 'LF', 'RW', 'RS', 'ST', 'LS', 'LW', 'SUB']
    }
  },
  props: ['data', 'options', 'name','background_value'],
  mounted(){
    this.renderBarChart();
  },
  computed: {
    chart_bg: function(){
      var bg =[];
      for(var i=0;i<this.data.length;i++){
        var color = "rgba(54, 162, 235, 0.6)";
        bg.push(color);
      }
      for(var j=0;j<this.background_value.length;j++){
        bg[this.background_value[j]] = "rgba(255, 99, 132, 0.6)";
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
          label: this.position[this.name],
          data: this.data,
          backgroundColor: this.chart_bg,
        }
      ],
    }, this.options)
    }
  }
})

Vue.component('compare-bar-chart',{
  extends: VueCharts.Bar,
  data(){
    return{
      position:['GK', 'SW', 'RWB', 'RB', 'RCB', 'CB', 'LCB', 'LB', 'LWB',
    'RDM', 'CDM', 'LDM', 'RM', 'RCM', 'CM', 'LCM', 'LM', 'RAM', 'CAM', 'LAM',
    'RF', 'CF', 'LF', 'RW', 'RS', 'ST', 'LS', 'LW', 'SUB']
    }
  },
  props: ['data', 'options', 'first', 'second'],
  mounted(){
    this.renderBarChart();
  },
  computed: {
  },
  methods: {
    renderBarChart: function(){
    this.renderChart({
      labels: ['슛', '유효슛', '도움', '골', '드리블', '패스시도', '패스성공', '차단', '태클'],
      datasets: [
        {
          label: this.position[this.data[0].spPosition]+'_'+Math.floor(this.data[0].spId/1000000)+'_'+this.first,
          data: [this.data[0].status.shoot,this.data[0].status.effectiveShoot,this.data[0].status.assist,this.data[0].status.goal,this.data[0].status.dribble,
          this.data[0].status.passTry,this.data[0].status.passSuccess,this.data[0].status.block,this.data[0].status.tackle],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
        {
          label: this.position[this.data[1].spPosition]+'_'+Math.floor(this.data[1].spId/1000000)+'_'+this.second,
          data: [this.data[1].status.shoot,this.data[1].status.effectiveShoot,this.data[1].status.assist,this.data[1].status.goal,this.data[1].status.dribble,
          this.data[1].status.passTry,this.data[1].status.passSuccess,this.data[1].status.block,this.data[1].status.tackle],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
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
