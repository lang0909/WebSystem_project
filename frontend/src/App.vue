<template>
  <div id="app">
    <div class="logo_cont">
      <img class="logo" src="./assets/background.jpg">
    </div>
    <input type="text" name="playerName" class="search_playerName" placeholder="선수이름">
    <button type="button" class="search_button">검색</button>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<style>
.logo{
  width: 100%;
  height: 300px;
}

.logo_cont{
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
