<template>
  <div class="home">
    <div class="logo_cont">
      <img class="logo" src="../assets/background.jpg">
    </div>
    <div class="search_cont">
      <input type="text" v-model="playerName" class="search_playerName" placeholder="선수이름">
      <button type="button" class="search_button" v-on:click="clicked">검색</button>
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
            <button type="button" v-bind:value="player.id" v-on:click="player_keep(player.id)" class="player_btn">담기</button>
            <button type="button" v-bind:value="player.id" v-on:click="player_clicked(player.id)" class="player_btn">선택</button>
          </div>
      </span>
    </div>
    <br>
    <hr width=”100%” color=”gray” noshade />
    <br>
    <div v-if="this.playerkeep.length">
      <button type="button" v-on:click="player_compare()" class="compare_btn">비교하기</button>
        <div v-for="player in this.playerkeep" class="ply">
          <div>
            <span>
              <img v-bind:src="'/players/'+player" class="back_img" :style="{'background-image': 'url('+'/season_background/'+player.substring(0,3)+'.png)'}">
            </span>
            <span>
              <img v-bind:src="'/season/'+player.substring(0,3)+'.JPG'" class="img_cont">
            </span>
            <span class="name_cont">
              {{player}}
            </span>
          </div>
        </div>
    </div>
    <div v-if="this.compare_change">
      <compare :data="this.compare_content" :key="this.compare_change" class="compare"></compare>
    </div>
    <div v-if="this.spid">
      <result :data="this.spid" :key="this.result_change" class="charts"></result>
    </div>
  </div>
</template>

<script>
import RRR from '../components/resultChart.vue'
import SSS from '../components/MultiChart.vue'

export default {
  components: {
    'result': RRR,
    'compare': SSS
  },
  data() {
    return{
      playerName: '',
      player_name: [],
      playerkeep: [],
      spid: '',
      result_change: 0,
      compare_change: 0,
      compare_content: [],
      compare_content1: '',
      compare_content2: '',
    }
  },
  methods: {
    clicked() {
      this.$http.get(`/api/${this.playerName}`)
      .then((response)=>{
        this.player_name = response.data;
      })
    },
    player_clicked(id){
      this.spid = id;
      this.result_change = this.result_change+1;
    },
    player_keep(id){
      if(this.playerkeep.length==2){
        alert("더 이상 추가할 수 없습니다.");
      }else if(this.playerkeep.length==1){
        this.playerkeep.push(id);
        this.$http.get(`/top_record/${this.playerkeep[0]}`)
        .then((response)=>{
            this.compare_content1 = response.data;
        })
        this.$http.get(`/top_record/${this.playerkeep[1]}`)
        .then((response)=>{
            this.compare_content2 = response.data;
        })
      }else if(this.playerkeep.length==0){
        this.playerkeep.push(id);
      }
    },
    player_compare(){
      var fff = [];
      this.compare_content = [];
      for(let i=0;i<this.compare_content1.length;i++){
        for(let j=0;j<this.compare_content2.length;j++){
          if(this.compare_content1[i].spPosition === this.compare_content2[j].spPosition){
            fff.push(this.compare_content1[i]);
            fff.push(this.compare_content2[j]);                   
            this.compare_content.push(fff);
            fff = [];
          }
        }
      }
      if(this.compare_content.length==0){
        alert("비교가능한 포지션이 없습니다.");
      }
      this.playerkeep=[];
      this.compare_change = this.compare_change+1;
    }
  },
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
  font-size: 20px;
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