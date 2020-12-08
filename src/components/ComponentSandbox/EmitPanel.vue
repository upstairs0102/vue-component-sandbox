<template>
  <div>
    <div>
      <h3>Emits</h3>
    </div>
    <div>
      <span
        v-for="option in keyOptions"
        :key="option">
        <input
          type="radio"
          disabled
          :id="option"
          :value="option"
          v-model="selectedKey"
          @change="handleCheckedKeyChange"/>
        <label
          :for="option">
          {{option}}
        </label>
      </span>
    </div>
    <div>
      <vue-json-pretty
        class="jsontree"
        v-if="!editMode&&isShowJsonViewer"
        :data="currentEmit"
        :selectable-type="'tree'">
      </vue-json-pretty>
    </div>
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
import { jsonParse, jsonStringify } from './jsonParser.js'

export default {
  name: 'emit-panel',
  props: {
    emits: {
      required: false,
      default () {
        return {}
      }
    },
  },
  components: {
    VueJsonPretty
  },
  data () {
    return {
      isShowJsonViewer: true,
      editMode: false,
      keyOptions: [], // checkbox options
      selectedKey: '', // checkbox value
    }
  },
  computed: {
    currentEmit () {
      if (this.emits[this.selectedKey]) {
        return this.emits[this.selectedKey]
      }
      return ''
    }
  },
  created () {
    this.keyOptions = Object.keys(this.emits)
  },
  watch: {
    emits: {
      handler (newData, oldData) {
        if (!newData || !oldData) {
          return
        }
        // 取得資料變化的emit
        for (let key in newData) {
          try {
            const newEmitValue = jsonStringify(newData[key])
            const oldEmitValue = jsonStringify(oldData[key])
            if (newEmitValue != oldEmitValue) {
              this.selectedKey = key
              break
            }
          } catch (e) {
            console.error(e)
          }
        }
      },
    },
    // VueJsonPretty v2.0.0-rc2不會監聽到資料變化，所以要強制重新渲染（舊版沒這個問題）
    currentEmit: {
      async handler (key) {
        this.isShowJsonViewer = false // VueJsonPretty v2.0.0-rc2不會監聽到資料變化，所以要強制重新渲染（舊版沒這個問題）
        await this.$nextTick()
        this.isShowJsonViewer = true
      }
    }
  },
  methods: {
    handleCheckedKeyChange (key) {
      this.selectedKey = key
    },
  }
}
</script>