<template>
  <main>
    <div class="demo-des">
      <h1>Demo 1</h1>
      <p>一般v-bind、以及v-on的Component</p>
    </div>
    <div>
      <component-sandbox
        :component="example.component"
        :props="example.props"
        :emits="example.emits">
      </component-sandbox>
    </div>
  </main>
</template>

<script>
import '@/components/ComponentSandbox/styles.css'
import ComponentSandbox from '@/components/ComponentSandbox/ComponentSandbox.vue'
import Form from '@/components/demo/Form.vue'

export default {
  components: {
    Form,
    ComponentSandbox
  },
  data() {
    return {
      example: {
        component: Form,
        props: {
          form: {
            column1: '',
            column2: '',
            column3: '',
            column4: '',
            column5: '',
          }
        },
        emits: {
          submit: {}
        }
      }
    }
  }
}
</script>
