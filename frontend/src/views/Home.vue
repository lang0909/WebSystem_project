<template>
  <div class="home">
    <div class="logo_cont">
      <img class="logo" src="../assets/background.jpg">
    </div>
    <div class="search_cont">
      <input type="text" v-model="playerName" class="search_playerName" placeholder="선수이름">
      <button type="button" class="btn btn-primary search_button" v-on:click="clicked">검색</button>
    </div>
    <div v-if="player_name.length">
      <span v-for="player in player_name" class="player">
          <span>
            <img v-bind:src="'/players/'+player.id" class="back_img" :style="{'background-image': 'url('+'/season_background/'+player.id.substring(0,3)+'.png)'}">
          </span>
          <div class="name_cont">
            <span>
              <img v-bind:src="'/season/'+player.id.substring(0,3)+'.JPG'" class="img_cont">
              {{player.name}}
            </span>
          </div>
          <div>
            <button type="button" v-bind:value="player.id" v-on:click="player_clicked(player.id)" class="btn btn-primary player_btn">선택</button>
          </div>
      </span>
    </div>
    <div v-if="this.spid">
      <result :data="this.spid" :key="this.result_change" class="charts"></result>
    </div>
  </div>
</template>

<script>
import Result from '../components/resultChart.vue'

export default {
  components: {
    'result': Result
  },
  data() {
    return{
      playerName: '',
      player_name: [],
      spid: '',
      result_change: 0,
    }
  },
  methods: {
    async clicked() {
      this.player_name = await this.$store.dispatch('searchPlayerInfo',{playerName: this.playerName})
    },
    player_clicked(id){
      this.spid = id;
      this.result_change = this.result_change+1;
    }
  }
}
</script>

<style>

.player_btn{
  vertical-align: super;
  width: 50px;
}
.logo{
  max-width: 650px;
  max-height: 370px;
  height: auto;
}

.back_img{
  width:90px;
  height: 90px;
  background-size: cover;
}

.back{
  width: 50px;
  height: 50px;
}


.player{
  width: 150px;
  height: 200px;
  margin-bottom: 40px;
  display: inline-block;
}

.ply{
  width: 150px;
  height: 200px;
  margin-bottom: 40px;
  display: inline-block;
}

.name_cont{
  vertical-align:middle;
  font-size: 14px;
}

.img_cont{
  width: 32px;
  height: 32px;
  vertical-align:middle;
  padding-bottom: 8px;
  padding-left: 2px;
}

.logo{
  width: 100%;
  max-width: 650px;
  max-height: 370px;
  height: auto;
}

.search_playerName{
  width: 580px;
  height: 30px;
  margin: 10px;
}

.search_button{
  width: 50px;
  height: 30px;
  margin: 5px;
}
.compare_btn{
  display: inline-block;
  vertical-align: super;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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