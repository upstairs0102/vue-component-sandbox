<template>
  <div class="autocomplete-input" style="position:relative;width:200px;padding:5px 0">
    <div>{{label}}</div>
    <input
      type="text"
      style="width:100%;padding:5px"
      v-model="syncValue"
      :placeholder="placeholder"
      @input="handleInput"
      @keyup.enter="handleEnter"
      @blur="handleBlur"
      @focus="handleFocus">
    <div
      class="list"
      style="cursor:pointer;border:1px #000000 solid;padding:5px"
      v-show="isShowAutocomplete">
      <div
        class="item"
        v-for="(item,index) in filterAutocomplete"
        :key="index"
        @mouseover="selectRecoText(item)">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // vue2.x
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  props: {
    label: {
      default () {
        return ''
      }
    },
    autocomplete: {
      default () {
        return []
      }
    },
    modelValue: {
      default () {
        return ''
      }
    },
    placeholder: {
      default () {
        ''
      }
    }
  },
  data () {
    return {
      isFocus: false,
      filterAutocomplete: []
    }
  },
  computed: {
    syncValue: {
      get () {
        return this.modelValue
      },
      set (v) {
        this.$emit('update:modelValue', v)
      }
    },
    isShowAutocomplete () {
      if (this.syncValue && this.filterAutocomplete.length > 0 && this.isFocus === true) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    handleInput () {
      this.setFilterAutocomplete()
    },
    handleEnter () {
      this.$emit('enter', this.syncValue)
    },
    handleBlur () {
      this.isFocus = false
      this.setFilterAutocomplete()
      this.$emit('blur', this.syncValue)
    },
    handleFocus () {
      this.isFocus = true
    },
    setFilterAutocomplete () {
      this.filterAutocomplete = this.autocomplete.filter(d => {
        return d.indexOf(this.syncValue) >= 0
      })
    },
    selectRecoText (text) {
      this.syncValue = text
    },
  }
}
</script>