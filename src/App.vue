<template>
  <div  >
    <el-container>
      <el-header>
        <img class="mlogo" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
      </el-header>
      <el-main id="app">
           <router-view/>
      </el-main>
    </el-container>
<!--    <nav>-->
<!--      <router-link to="/">主页</router-link> |-->
<!--      <router-link to="/about">关于</router-link>-->
<!--    </nav>-->

<!--    //定义动态组件显示的出口-->
  </div>
</template>

<style>
  /*下面为全局样式可以注释掉*/
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  /*上面是eu模板，下面为自定义样式*/
  .mlogo{
    height: 80%;

    vertical-align: middle;
    /*margin-top: 6px;*/
  }
  #app{
    max-width: 960px;
    /*margin: 30px;*/
    margin:   10% ;
    margin-top:  1%;
  }

</style>
