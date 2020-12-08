<script>
// vue3.x

import ComponentSandboxSlot from './ComponentSandboxSlot.vue';
import { h, resolveComponent } from 'vue'
import { jsonClone } from './jsonParser.js'

const DynamicHeading = (props, context) => {
  return h(
    ComponentSandboxSlot,
    {
      props: props.props,
      emits: props.emits
    },
    {
      // v-slot:default
      default: ({ syncProps, handleEmits }) => {
        let mapVOnAttrs = {}
        Object.keys(handleEmits).map(key => {
          let attrName = key
          // event handler的名稱必須為on開頭 e.g. v-on名稱為click則必須轉換為onClick
          if (attrName.length >= 2 && attrName.substring(0,2) === 'on') {
            attrName = key
          } else {
            attrName = `on${key.substring(0,1).toUpperCase()}${key.substring(1)}`
          }
          mapVOnAttrs[attrName] = handleEmits[key]
        })
        return h(props.component, {
          ...syncProps, // v-bind
          ...mapVOnAttrs // v-on
        })
      }
    }
  )
}

DynamicHeading.props = ['component', 'props', 'emits']

export default DynamicHeading

</script>
