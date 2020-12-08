<template>
  <main>
    <div class="demo-des">
      <h1>Demo 3</h1>
      <p>css樣式的邊界限制在預覽畫面區塊之中</p>
    </div>
    <div>
      <component-sandbox
        :props="example.props"
        :emits="example.emits">
        <template v-slot="{ syncProps, handleEmits }">
          <lightbox
            v-model="syncProps['v-model']"
            :data="syncProps.data"
            @submit="handleEmits.submit">
          </lightbox>
          <button
            style="padding:10px"
            @click="handleClick(syncProps)">
            CLICK ME !!
          </button>
        </template>
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
import Lightbox from '@/components/demo/Lightbox.vue'

export default {
  components: {
    Lightbox,
    ComponentSandbox
  },
  data () {
    return {
      example: {
        props: {
          'v-model': false,
          data: {
            name: '',
            id: ''
          }
        },
        emits: {
          submit: {}
        }
      }
    }
  },
  methods: {
    handleClick (syncProps) {
      syncProps['v-model'] = true
    }
  }
}
</script>
