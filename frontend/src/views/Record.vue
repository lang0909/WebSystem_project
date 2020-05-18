<template>
  <div class="record">
    <div class="logo_cont">
      <img class="logo" src="../assets/background.jpg">
    </div>
    <div class="search_cont">
      <input type="text" v-model="userName" class="search_playerName" placeholder="유저이름">
      <button type="button" class="btn btn-primary search_button" v-on:click="clicked">검색</button>
    </div>
    <div v-if="this.userRecord.length" class="card-cont">
      <div v-for="record_arr in userRecord" class="card card-primary">
        <div class="card-header"><h4>{{record_arr[0].split('vs')[0]}}</h4></div>
        <div class="card-body">
          <div v-for="record in record_arr" class="chart_cont">
            <record-doughnut-chart :data="record" :options="{responsive: false, maintainAspectRatio: false}"></record-doughnut-chart>
            <div class="chart-inner text-center">
              <p>{{total(record)}}</p>
              <p>{{percent(record)}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>    
</template>

<script>
export default {
  components: {
  },
  data() {
    return{
      userName: '',
      userRecord: [],
    }
  },
  methods: {
    async clicked() {
      this.userRecord = await this.$store.dispatch('searchUserRecord',{userName: this.userName})
      if(this.userRecord[0]=="E"){
        alert('존재하지 않는 유저이름입니다. 다시입력해주세요.');
        this.userRecord = [];
      }
    },
    total(val) {
      let win = parseInt(val.split('___')[1]);
      let draw = parseInt(val.split('___')[2]);
      let lose = parseInt(val.split('___')[3]);
      return win+'승'+draw+'무'+lose+'패';      
    },
    percent(val){
      let win = parseInt(val.split('___')[1]);
      let draw = parseInt(val.split('___')[2]);
      let lose = parseInt(val.split('___')[3]);
      return ((win/(win+draw+lose))*100).toFixed(2)+'%';
    }
  },
}
</script>

<style>
.card-cont{
  max-width: 650px;
  margin: 0 auto;
}

.player_btn{
  vertical-align: super;
  width: 50px;
}
.logo{
  max-width: 650px;
  max-height: 370px;
  height: auto;
}

.search_playerName{
  max-width: 580px;
  min-width: 300px;
  height: 30px;
  margin: 10px;
}

.search_button{
  width: 50px;
  height: 30px;
  margin: 5px;
}

.chart_cont{
  width: 200px;
  height: 200px;
  display: inline-block;
  position: relative;
}

.chart-inner {
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
}

.text-center{
  text-align: center;
}

p{
  font-size: 10px;
  margin-bottom: 3px;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>