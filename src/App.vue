<template>
  <div>
    <a class="github-fork-ribbon" href="https://github.com/shangdeyou/vue-component-sandbox/" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
    <div style="display:flex;justify-content:center">
      <router-view style="width:1024px"/>
    </div>
  </div>
</template>

<script>
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.demo-des {
  text-align: center;
}
</style>
