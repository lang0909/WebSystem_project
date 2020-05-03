<template>
  <div class="record">
    <div class="logo_cont">
      <img class="logo" src="../assets/background.jpg">
    </div>
    <div class="search_cont">
      <input type="text" v-model="userName" class="search_playerName" placeholder="유저이름">
      <button type="button" class="search_button" v-on:click="clicked">검색</button>
    </div>
    <div v-if="userRecord.length">
      <span v-for="user in userRecord" class="user">
          <div>{{user.split('___')[0]}} &nbsp; &nbsp;{{user.split('___')[2]}}<br/>{{user.split('___')[1]}}</div>
      </span>
      <br/>
      <br/>
    </div>
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
      if(await this.$store.dispatch('searchUserRecord',{userName: this.userName}) == "Error"){
        this.userRecord = [];
        alert('존재하지 않는 유저이름입니다. 다시입력해주세요.');
      }else{
        this.userRecord = await this.$store.dispatch('searchUserRecord',{userName: this.userName})
      }
    },
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