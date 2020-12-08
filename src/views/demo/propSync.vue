<template>
  <main>
    <div class="demo-des">
      <h1>Demo 2</h1>
      <p>一般v-bind、雙向綁定(v-model)、以及v-on的Component</p>
    </div>
    <div>
      <component-sandbox
        :props="example.props"
        :emits="example.emits">
        <template v-slot="{ syncProps, handleEmits }">
          <autocomplete
            v-model="syncProps['v-model']"
            :label="syncProps.label"
            :autocomplete="syncProps.autocomplete"
            :placeholder="syncProps.placeholder"
            @enter="handleEmits.enter"
            @blur="handleEmits.blur">
          </autocomplete>
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
import Autocomplete from '@/components/demo/Autocomplete.vue'

export default {
  components: {
    Autocomplete,
    ComponentSandbox
  },
  data() {
    return {
      example: {
        component: Autocomplete,
        props: {
          autocomplete: ['candy','car','card','can','bakery','boring','band','country','drink','eye','fork','game','hospital','orange','restroom','sleep','talk','tree','yesterday','weather','zoo'],
          'v-model': '',
          label: 'Autocomplate Input',
          
          placeholder: '請輸入英文字母'
        },
        emits: {
          enter: '',
          blur: ''
        },
      }
    }
  },
  methods: {
  }
};
</script>
