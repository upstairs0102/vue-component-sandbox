<template>
  <div>
    <div>
      <div :span="14">
        <h4>Props</h4>
      </div>
      <!-- <div :span="10" style="margin-top:18px;text-align:right;font-size:24px;">
        <i :class="collapseIcon" style="cursor: pointer;" @click="handleCollapse"></i>
      </div> -->
    </div>
    <div>
      <span v-for="option in keyOptions" :key="option">
        <input :id="option" :value="option" type="radio" v-model="selectedKey" @change="handleCheckedKeyChange"/>
        <label :for="option">{{option}}</label>
      </span>
    </div>
    <div>
      <textarea
        v-if="editMode"
        v-model="currentEditingProp"
        rows="35"
        cols="2"/>
      <vue-json-pretty
        class="jsontree"
        v-if="!editMode && isShowJsonViewer"
        :data="currentProp"
        :selectable-type="'tree'">
      </vue-json-pretty>
    </div>
    <div>
      <div>
        Edit Mode<input type="checkbox" v-model="editMode" @change="onEditModeChange"/>
      </div>
      <div style="text-align:right;">
        <button
          type="primary"
          :disabled="editMode==false"
          @click="handlePropsUpdate"
          round>
          Update
        </button>
        <button
          type="primary"
          @click="handlePropsReset"
          round>
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { jsonParse, jsonStringify, jsonClone } from './jsonParser.js'

export default {
  name: 'props-panel',
  props: {
    props: {
      required: false,
      default () {
        return {}
      }
    }
  },
  components: {
    VueJsonPretty
  },
  data () {
    return {
      childProps: {}, // 目前預覽中的props（全部）
      isShowJsonViewer: true,
      editMode: false,
      editingProps: {}, // 編輯中所有的props json string => key:props, value:props的值(轉字串)
      keyOptions: [], // checkbox options
      selectedKey: '', // checkbox value
      errorMessage: ''
    }
  },
  computed: {
    currentProp () {
      if (this.childProps[this.selectedKey]) {
        return this.childProps[this.selectedKey]
      }
      return ''
    },
    currentEditingProp: {
      get () {
        return this.editingProps[this.selectedKey]
      },
      set (d) {
        this.editingProps[this.selectedKey] = d
      }
    },
  },
  watch: {
    props: {
      handler (d) {
        try {
          this.childProps = jsonClone(d)
        } catch (e) {
          this.$emit('handleError', e)
          return
        }
      },
      deep: true,
      immediate: true
    },
    // VueJsonPretty v2.0.0-rc2不會監聽到資料變化，所以要強制重新渲染（舊版沒這個問題）
    currentProp: {
      async handler (key) {
        this.isShowJsonViewer = false // VueJsonPretty v2.0.0-rc2不會監聽到資料變化，所以要強制重新渲染（舊版沒這個問題）
        await this.$nextTick()
        this.isShowJsonViewer = true
      }
    }
  },
  beforeMount () {
    this.editingProps = {}
    // checkbox選項
    this.keyOptions = Object.keys(this.props)
    // 預設checkbox
    if (this.keyOptions[0] != null) {
      this.selectedKey = this.keyOptions[0]
    }
  },
  methods: {
    handleCheckedKeyChange (key) {
    },
    toggleEditMode (mode) {
      this.editMode = mode
      this.onEditModeChange()
    },
    onEditModeChange () {
      if (this.editMode == false) {
        // 取消則什麼事也不做
        return
      }
      try {
        let editingProps = {}
        this.keyOptions.forEach((key) => {
          editingProps[key] = jsonStringify(this.childProps[key])
        })
        this.editingProps = editingProps
      } catch (e) {
        this.$emit('handleError', e)
      }
    },
    // 更新參數
    handlePropsUpdate () {
      let newRenderProps = {} // 新的props
      try {
        this.keyOptions.forEach((key) => {
          newRenderProps[key] = jsonParse(this.editingProps[key])
        })
      } catch (e) {
        this.$emit('handleError', e)
        this.toggleEditMode(false) // 因為json stringify暫存的資料在parse的時候已經刪除了，所以必須還原
        return
      }

      this.editMode = false
      this.$emit('handlePropsUpdate', newRenderProps)
    },
    // 回復範例
    handlePropsReset () {
      this.editMode = false
      this.$emit('handlePropsReset')
    },
  }
}
</script>