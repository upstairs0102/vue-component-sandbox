<template>
  <main>
    <div class="demo-des">
      <h1>Demo 4</h1>
      <p>prop使用callback function的Component（function內容只能顯示不能修改）</p>
    </div>
    <div>
      <component-sandbox
        :component="example.component"
        :props="example.props">
      </component-sandbox>
    </div>
  </main>
</template>

<script>
import '@/components/ComponentSandbox/styles.css'
import ComponentSandbox from '@/components/ComponentSandbox/ComponentSandbox.vue'
// npm安裝請改以下import程式
// import ComponentSandbox from 'vue-component-sandbox'
// import 'vue-component-sandbox/lib/styles.css'
import ButtonCallback from '@/components/demo/ButtonCallback.vue'

export default {
  components: {
    ButtonCallback,
    ComponentSandbox
  },
  data() {
    return {
      example: {
        component: ButtonCallback,
        props: {
          cb: function () {
            alert('CALLBACK FUNCTION WORKS!!')
          },
          label: 'CLICK ME !!'
        },
      }
    }
  }
}
</script>
