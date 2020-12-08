<template>
  <div>
    <button style="padding:10px" @click="handleCallback">{{label}}</button>
  </div>
</template>

<script>
export default {
  props: {
    cb: {
      required: true
    },
    label: {
      required: true
    }
  },
  methods: {
    handleCallback () {
      this.cb()
    }
  }
}
</script>