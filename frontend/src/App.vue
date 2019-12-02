<template>
  <div id="app">
    <div class="logo_cont">
      <img class="logo" src="./assets/background.jpg">
    </div>
    <div class="search_cont">
      <input type="text" v-model="playerName" class="search_playerName" placeholder="선수이름">
      <button type="button" class="search_button" v-on:click="clicked">검색</button>
    </div>
    <div v-if="player_name.length">
      <div v-for="player in player_name" class="player">
        <div>
          <!-- <button type="button" v-value="player.id" v-on:click="player_clicked">선택</button> -->
          <span>
            <img v-bind:src="'/players/'+player.id" class="back_img" :style="{'background-image': 'url('+'/season_background/'+player.id.substring(0,3)+'.png)'}">
          </span>
          <span>
            <img v-bind:src="'/season/'+player.id.substring(0,3)+'.JPG'" class="img_cont">
          </span>
          <span class="name_cont">
            {{player.name}}
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
</template>

<script>
import Search from './components/Search.vue'

export default {
  components: {
    'search': Search
  },
  data() {
    return{
      playerName: '',
      player_name: []
    }
  },
  methods: {
    clicked() {
      this.$http.get(`/api/${this.playerName}`)
      .then((response)=>{
        console.log(response.data);
        this.player_name = response.data;
      })
    }
  }
}
</script>

<style>
.back_img{
  width:30px;
  height: 30px;
  background-size: cover;
}

.back{
  width: 50px;
  height: 50px;
}


.player{
  height: 40px;
}

.name_cont{
  vertical-align: super;
}

.img_cont{
  width: 25px;
  height: 25px;
}

.logo{
  width: 100%;
  height: 300px;
}

.search_cont{
  background-color: rgb(44, 62, 80);
}

.search_playerName{
  width: 400px;
  height: 30px;
  margin: 10px;
}

.search_button{
  width: 50px;
  height: 30px;
  margin: 5px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
