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
      labels: ['슛', '유효슛', '도움', '골', '드리블', '패스성공률', '차단', '태클'],
      datasets: [
        {
          label: this.position[this.name],
          data: [this.data[0],this.data[1],this.data[2],this.data[3],this.data[4]/10,this.data[6]/this.data[5],this.data[7],this.data[8]],
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
      labels: ['슛', '유효슛', '도움', '골', '패스성공률', '차단', '태클'],
      datasets: [
        {
          label: this.position[this.data[0].spPosition]+'  '+this.first,
          data: [this.data[0].status.shoot,this.data[0].status.effectiveShoot,this.data[0].status.assist,this.data[0].status.goal,
          this.data[0].status.passSuccess/this.data[0].status.passTry,this.data[0].status.block,this.data[0].status.tackle],
          backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
        {
          label: this.position[this.data[1].spPosition]+'  '+this.second,
          data: [this.data[1].status.shoot,this.data[1].status.effectiveShoot,this.data[1].status.assist,this.data[1].status.goal,
          this.data[1].status.passSuccess/this.data[1].status.passTry,this.data[1].status.block,this.data[1].status.tackle],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        }
      ],
    }, this.options)
    }
  }
})

Vue.component('record-doughnut-chart',{
  extends: VueCharts.Doughnut,
  data(){
    return{
      background_color: ["rgba(54, 162, 235, 0.6)","#BBBBBB","rgba(255, 99, 132, 0.6)"]
    }
  },
  props: ['data','options'],
  mounted(){
    this.renderDoughnutChart();
  },
  computed: {
  },
  methods: {
    renderDoughnutChart: function(){
      this.renderChart(
        {
          labels: ['승','무','패'],
          datasets: [
            {
              data: [this.data.split('___')[1], this.data.split('___')[2], this.data.split('___')[3]],
              backgroundColor: this.background_color,
            }
          ],
       },
       {
          legend: {display: false},
          title: {
            display: true,
            text: 'vs '+this.data.split('vs')[1].split('___')[0],
          }
       }
      )
    }
  },
})


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
