<template>
  <div>
    <div id="nav">
       | <router-link :to="{name:'demo-basic'}">Demo 1</router-link> | 
      <router-link :to="{name:'demo-prop-sync'}">Demo 2</router-link> | 
      <router-link :to="{name:'demo-full-screen-block'}">Demo 3</router-link> | 
      <router-link :to="{name:'demo-prop-callback'}">Demo 4</router-link> | 
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'demo'
}
</script>
