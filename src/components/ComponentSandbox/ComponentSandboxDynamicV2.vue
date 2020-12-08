<script>
// vue2.x

import ComponentSandboxSlot from './ComponentSandboxSlot.vue';

export default {
  name: 'component-sandbox-dynamicv2',
  props: {
    component: {
      required: true
    },
    props: {
      default () {
        return {}
      }
    },
    emits: {
      default () {
        return {}
      }
    }
  },
  functional: true,
  components: {
    ComponentSandboxSlot,
  },
  render (createElement, context) {
    return createElement(
      ComponentSandboxSlot,
      {
        props: {
          props: context.props.props,
          emits: context.props.emits
        },
        scopedSlots: {
          default: ({ syncProps, handleEmits }) => {
            return createElement(context.props.component, {
              props: syncProps,
              on: handleEmits
            })
          }
        }
      },
    )
  }
}
</script>
