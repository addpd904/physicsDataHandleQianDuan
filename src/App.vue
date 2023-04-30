<template>
  <div id="app">
    <nav>
      <div class="joinus">
      <el-tag type="warning">余下实验处理仍在开发中，如果你也对网页开发感兴趣，加入我们，一起开发~会简单的java语法就行</el-tag>
      </div>
      <router-link to="/">液体表面张力系数</router-link> |
      <router-link to="/focalDistance">焦距测量</router-link> |
      
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.joinus{
      margin-bottom: 30px;
    }
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
