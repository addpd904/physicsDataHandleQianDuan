<template>
  <div id="app">
    <nav>
      <div class="joinus">
      <el-tag type="success">余下实验处理仍在开发中，如果你也对网页开发感兴趣，加入我们，一起开发~</el-tag>
      <br/>
      <br/>
      <el-tag type="warning" class="warn" >声明：计算结果仅供参考，不建议用于实验报告的填写哦~<br>如计算有误，请联系QQ2056098523修改</el-tag>


      </div>
      <router-link to="/">液体表面张力系数</router-link> |
      <router-link to="/focalDistance">薄透镜焦距的测量</router-link> |
      <router-link to="/huiSiTong">惠斯通电桥测电阻</router-link> |
      <router-link to="/shengShuCeLiang">声速的测量</router-link> |

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
#app .warn{
    font-size: 17px;
}

</style>
<!-- js html css vue element  -->