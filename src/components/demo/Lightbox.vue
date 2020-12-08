<template>
  <transition name="fade">
    <div class="lightbox" v-if="modelValue">
      <div class="content">
        <div>
          姓名 <input type="label" v-model="childData.name"/>
        </div>
        <div>
          員編 <input type="label" v-model="childData.id"/>
        </div>
        <div>  
          <button @click="close">取消</button>
          <button @click="submit">完成</button>
        </div>
      </div>
      <div class="bg" @click="close"></div>
    </div>
  </transition>
</template>

<script>
export default {
  // vue2.x
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  props: ['modelValue', 'data'],
  data () {
    return {
      childData: {
        name: '',
        id: '' 
      }
    }
  },
  methods: {
    close () {
      this.$emit('update:modelValue', !this.modelValue)
    },
    submit () {
      this.$emit('submit', this.childData)
      this.close()
    }
  },
  watch: {
    modelValue: {
      handler (d) {
        if (d === true) {
          this.childData = JSON.parse(JSON.stringify(this.data)) 
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

.lightbox {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  overflow: auto;
}

.lightbox .content {
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  padding: 30px 60px;
  width: 87.5%;
  max-width: 900px;
  margin-bottom: 50px;
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 0 0 12px 0 rgba(84, 84, 84, 0.3);
}
.lightbox .bg {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.fade-enter-value, .fade-leave-value {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-value below version 2.1.8 */ {
  opacity: 0;
}
</style>