<template>
  <div>
    <div style="text-align:center" v-if="$route.name==='demo'">
      <h1>Vue Component Sandbox</h1>
    </div>
    <div id="nav">
       | <router-link :to="{name:'demo-basic'}">Demo 1</router-link> | 
      <router-link :to="{name:'demo-prop-sync'}">Demo 2</router-link> | 
      <router-link :to="{name:'demo-full-screen-block'}">Demo 3</router-link> | 
      <router-link :to="{name:'demo-prop-callback'}">Demo 4</router-link> | 
      <a href="http://shangdeyou.github.io/vue-component-sandbox">Read Me</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'demo'
}
</script>
