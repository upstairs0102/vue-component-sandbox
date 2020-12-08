<template>
  <div>
    <component
      v-if="sandboxType==='dynamic'"
      :is="dynamicComponent"
      :component="component"
      :props="props"
      :emits="emits">
    </component>
    <component-sandbox-slot
      v-else-if="sandboxType==='slot'"
      :props="props"
      :emits="emits">
      <template v-slot="{ syncProps, handleEmits }">
        <slot
          :syncProps="syncProps"
          :handleEmits="handleEmits">
        </slot>
      </template>
    </component-sandbox-slot>
  </div>
</template>

<script>
import ComponentSandboxSlot from './ComponentSandboxSlot.vue'

export default {
  name: 'component-sandbox',
  props: {
    component: {
      required: false
    },
    props: {
      required: false
    },
    emits: {
      required: false
    }
  },
  components: {
    ComponentSandboxSlot
  },
  data () {
    return {
      sandboxType: '',
      dynamicComponent: undefined
    }
  },
  created () {
    if (this.component) {
      if (this._isVue) {
        // dynamic component (vue2.x)
        this.sandboxType = 'dynamic'
        this.dynamicComponent = () => import('./ComponentSandboxDynamicV2.vue')
        return
      }
      // dynamic component (vue3.x)
      this.sandboxType = 'dynamic'
      import('./ComponentSandboxDynamicV3.vue')
        .then(d => this.dynamicComponent = d.default)
      return
    }
    // slot component
    this.sandboxType = 'slot'
  }
}
</script>
