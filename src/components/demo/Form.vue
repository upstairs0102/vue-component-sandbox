<template>
  <div>
    <div>
      欄位1
      <input
        type="text"
        v-model="childForm.column1">
    </div>
    <div>
      欄位2
      <input
        type="text"
        v-model="childForm.column2">
    </div>
    <div>
      欄位3
      <input
        type="text"
        v-model="childForm.column3">
    </div>
    <div>
      欄位4
      <input
        type="text"
        v-model="childForm.column4">
    </div>
    <div>
      欄位5
      <input
        type="text"
        v-model="childForm.column5">
    </div>
    <div>
      <button @click="handleButtonClick">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      childForm: {
        column1: '',
        column2: '',
        column3: '',
        column4: '',
        column5: '',
      }
    }
  },
  watch: {
    form: {
      handler (form) {
        Object.keys(form).forEach(key => {
          this.childForm[key] = form[key]
        })
      },
      immediate: true
    }
  },
  methods: {
    handleButtonClick () {
      this.$emit('submit', this.childForm)
    }
  }
}
</script>
