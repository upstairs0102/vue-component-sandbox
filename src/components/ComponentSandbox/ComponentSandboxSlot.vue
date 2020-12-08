<template>
  <div class="component-sandbox">
    <div class="row">
      <div class="col" :class="panelSpan" v-if="isCollapse">
        <div>
          <div class="span-10" style="margin-top:18px;text-align:right;font-size:24px;">
            <i :class="collapseIcon" style="cursor: pointer;" @click="toggleCollapse"></i>
          </div>
        </div>
      </div>
      <div
        class="component-sandbox-propspanel col"
        v-if="!isCollapse"
        :class="panelSpan">
        <props-panel
          :props="childProps"
          @handlePropsUpdate="handlePropsUpdate"
          @handlePropsReset="handlePropsReset"
          @handleError="handleError">
        </props-panel>
        <emit-panel
          :emits="childEmits">
        </emit-panel>
      </div>
      <div
        class="component-sandbox-previewpanel col"
        :class="contentSpan">
        <preview-panel
          v-if="isShowComponent"
          :errorMessage="errorMessage">
          <!-- slot:Component -->
          <slot
            :syncProps="childProps"
            :handleEmits="handleEmits">
          </slot>
        </preview-panel>
      </div>
    </div>
  </div>
</template>

<script>
/*
使用範例：
<component-sandbox-slot
  :props="props"
  :emits="emits">
  <!--引入要展示的component-->
  <template v-slot="{ syncProps, handleEmits }">
    <autocomplete
      v-model="syncProps['v-model']"
      :data="syncProps.data"
      @click="handleEmits.click">
    </autocomplete>
  </template>
</component-sandbox-slot>
*/
import { jsonClone } from './jsonParser.js'
import PropsPanel from './PropsPanel.vue'
import EmitPanel from './EmitPanel.vue'
import PreviewPanel from './PreviewPanel.vue'

export default {
  name: 'component-sandbox-slot',
  props: {
    props: {
      required: false
    },
    emits: {
      required: false
    }
  },
  components: {
    PropsPanel,
    EmitPanel,
    PreviewPanel
  },
  data () {
    return {
      isCollapse: false,
      isShowComponent: true,
      defaultProps: null, // 原始props
      childProps: null, // 目前預覽中的props
      childEmits: null, // 目前顯示中的emits
      handleEmits: {}, // 用來顯示emit參數的函式集（給slot中的component使用） => key: emit名稱, value: 取得emit傳入參數的function
      errorMessage: {
        message: null,
        stack: null
      }
    }
  },
  computed: {
    collapseIcon () {
      if (this.isCollapse) {
        return 'el-icon-arrow-right'
      } else {
        return 'el-icon-close'
      }
    },
    panelSpan () {
      if (this.isCollapse) {
        return ['span-1']
      } else {
        return ['span-10']
      }
    },
    contentSpan () {
      if (this.isCollapse) {
        return ['span-23']
      } else {
        return ['span-14']
      }
    },
  },
  watch: {
    props: {
      handler (d) {
        this.childProps = jsonClone(d)
      },
      deep: true
    },
    emits: {
      handler (d) {
        this.childEmits = jsonClone(d)
        // 用來顯示emit參數的函式集（給slot中的component使用） => key: emit名稱, value: 取得emit傳入參數的function
        this.handleEmits = {}
        Object.keys(this.childEmits).forEach(key => {
          this.handleEmits[key] = value => {
            // 寫入childEmits
            let childEmits = jsonClone(this.childEmits)
            childEmits[key] = value
            this.childEmits = childEmits
          }
        })
      },
      immediate: true
    },
    childProps: {
      handler () {
        if (!this.errorMessage.message) {
          return
        }
        // 有變更資料即清除error message
        this.errorMessage = {
          message: null,
          stack: null
        }
      },
      deep: true
    }
  },
  created () {
    this.defaultProps = jsonClone(this.props)
    this.childProps = jsonClone(this.props)
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    async handlePropsUpdate (newProps) {
      this.isShowComponent = false // 用v-if強制刷新component
      await this.$nextTick()
      this.childProps = jsonClone(newProps)
      this.isShowComponent = true // 用v-if強制刷新component
    },
    async handlePropsReset () {
      this.isShowComponent = false // 用v-if強制刷新component
      await this.$nextTick()
      this.childProps = jsonClone(this.defaultProps)
      this.isShowComponent = true // 用v-if強制刷新component
    },
    handleError (err) {
      this.errorMessage = {
        message: `message: ${err.message}`,
        stack: `stack: ${err.stack}`
      }
    }
  }
}
</script>
