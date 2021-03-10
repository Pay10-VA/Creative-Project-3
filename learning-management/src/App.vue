<template>
  <div id="app">
    <div id="header">
      <div id="header-left">
        <router-link to="/"><h1>Smart Class</h1></router-link>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
    <div id="footer">
      <br>
      <a href="https://github.com/Pay10-VA/Creative-Project-3">Creative Project 3 GitHub Repository</a>
      <br>
      <br>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  display: inline-flex;
  background-color: #325A7F;
  width: 100%;
}

#header-left {
  width: 50%;
  text-align: left;
  padding-left: 20px;
  font-size: 22px;
  font-family: 'Raleway', sans-serif;
  margin-top: 5px;
  margin-bottom: 5px;
}

#nav {
  width: 50%;
  text-align: right;
  padding: 10px 0px;
  margin-right: 20px;
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
}

#header-left > a{
  text-decoration: none !important;
  color: white;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: yellow;
}

#footer {
  background-color: #325A7F;
  font-family: 'Raleway', sans-serif;
}

#footer > a {
  text-decoration: none;
  color: white;
}

</style>
