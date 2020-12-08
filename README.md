# vue-component-sandbox

## Features

快速在Vue專案中建立Component的測試沙箱，提供操作面板可檢視/操作Props以及監聽事件，並依造資料將Component即時呈現在畫面中、操作Component時也會將資料呈現在面板當中。

*支援Vue v2.x及v3.x。依賴`vue-json-pretty`套件，並且必須安裝對應版本：

Vue2.x => vue-json-pretty **v1.7.1** 以上

Vue v3.x，=> vue-json-pretty **v2.0.0-rc2** 以上

## Links

npm: https://www.npmjs.com/package/vue-component-sandbox

Demo: http://shangdeyou.github.io/vue-component-sandbox/demo

## Install


Vue2.x

```
npm install vue-json-pretty@1.7.1 --save
npm install vue-component-sandbox --save
```

Vue v3.x

```
npm install vue-json-pretty@2.0.0-rc.2 --save
npm install vue-component-sandbox --save
```

## Usage

### 基本使用

基本使用請參考如下範例，最簡使用方式import Component進來開箱即用，不需任何額外的設置。可選擇import預設css樣式檔，或者可自定義所需的css。

```
<template>
  <component-sandbox
    :component="YourComponent"
    :props="props"
    :emits="emits">
  </component-sandbox>
</template>

<script>
import ComponentSandbox from 'vue-component-sandbox'
import 'vue-component-sandbox/lib/styls.css' // optional
import '@/YourComponent.vue' // preview component

export default {
  components: {
    ComponentSandbox,
    YourComponent
  },
  data () {
    return {
      // optional
      props: {
        yourComponentsVBindName: '' // [key]: v-bind name [value]: default value
      },
      // optional
      emits: {
        yourComponentsVOnName: '', // [key]: v-on name [value]: '' as default value
      }
    }
  }
}
</script>
```

### 使用Slot嵌入Component

要預覽的Component可放入default slot，提供作為進階需求使用。slot中的Component需使用注入的`syncProps`及`handleEmits`才能正確的綁定資料。

```
<template>
  <component-sandbox
    :props="props"
    :emits="emits">
    <template v-slot="{ syncProps, handleEmits }">
      <autocomplete
        :value="syncProps.value"
        :label="syncProps.label"
        :autocomplete="syncProps.autocomplete"
        :placeholder="syncProps.placeholder"
        @enter="handleEmits.enter"
        @blur="handleEmits.blur">
      </autocomplete>
    </template>
  </component-sandbox>
</template>
```
