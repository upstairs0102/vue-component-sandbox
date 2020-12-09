<template>
  <div :class="{'expand':isExpanded}">
    <div>
      <div :span="20">
        <h4 :class="{'expand-title':isExpanded}">Preview</h4>
        <div
          style="text-align:right"
          :style="collapseStyle">
          <button
            type="primary"
            @click="toggleCollapse">
            {{collapseText}}
          </button>
        </div>
      </div>
      <!-- <div
        style="margin-top:18px;text-align:right; font-size:24px"
        :span="4">
        <i
          style="cursor: pointer;"
          :class="collapseIcon"
          @click="toggleCollapse">
        </i>
      </div> -->
    </div>
    <div
      class="display-block"
      :class="{expanded: isExpanded}"
      :body-style="{ padding: '0px' }">
      <div
        class="display-error"
        v-if="isError">
        {{errorMessage.message}}
        <br>
        {{errorMessage.stack}}
      </div>
      <!--Component-->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview-panel',
  props: {
    errorMessage: {
      required: false,
      default () {
        return {
          message: '',
          stack: ''
        }
      }
    }
  },
  data () {
    return {
      isExpanded: false
    }
  },
  computed: {
    // syncCollapse: {
    //   get () {
    //     return this.isCollapse
    //   },
    //   set (v) {
    //     this.$emit('update:isCollapse', v)
    //   }
    // },
    collapseIcon () {
      if (this.isExpanded === false) {
        return 'el-icon-search'
      } else {
        return 'el-icon-minus'
      }
    },
    collapseText () {
      if (this.isExpanded === false) {
        return 'Full Screen'
      } else {
        return ' X '
      }
    },
    collapseStyle () {
      if (this.isExpanded === false) {
        return {}
      } else {
        return {
          position: 'absolute',
          top: '15px',
          right: '15px'
        }
      }
    },
    isError () {
      if (this.errorMessage.message || this.errorMessage.stack) {
        return true
      }
      return false
    }
  },
  methods: {
    toggleCollapse () {
      this.isExpanded = !this.isExpanded
    },
  }
}
</script>
