# vue-component-sandbox

## Features

快速在Vue專案中建立Component的測試沙箱，可操作Props以及監聽事件，將資料雙向綁定即時預覽Component。

## Links

npm: https://www.npmjs.com/package/vue-component-sandbox

Demo: http://shangdeyou.github.io/vue-component-sandbox/demo

## Environment

*支援Vue v2.x及v3.x。依賴`vue-json-pretty`套件，並且必須安裝對應版本：

Vue v2.x => vue-json-pretty **v1.7.1** 以上

Vue v3.x，=> vue-json-pretty **v2.0.0-rc3** 以上

## Install

Vue v2.x

```
npm install vue-json-pretty@1.7.1 --save
npm install vue-component-sandbox --save
```

Vue v3.x

```
npm install vue-json-pretty@2.0.0-rc.3 --save
npm install vue-component-sandbox --save
```

## Usage

### 基本使用

基本使用請參考如下範例，最簡使用方式import Component進來開箱即用，不需任何額外的設置。可選擇import預設css樣式檔，或者可自定義所需的css。

```
<template>
  <component-sandbox
    :component="YourComponent"
    :props="{ vBindName: 'defaultValue' }"
    :emits="{ vOnName: '' }">
  </component-sandbox>
</template>

<script>
import ComponentSandbox from 'vue-component-sandbox'
import 'vue-component-sandbox/lib/styles.css' // optional
import '@/components/YourComponent.vue' // preview component

export default {
  components: {
    ComponentSandbox,
    YourComponent
  }
}
</script>
```

### 使用Slot嵌入Component

要預覽的Component可放入default slot，提供作為進階需求使用。slot中的Component需使用注入的`syncProps`及`handleEmits`才能正確的綁定資料。

```
<template>
  <component-sandbox
    :props="{
      value: '',
      label: 'Autocomplete Input',
      placeholder: '請輸入'
    }"
    :emits="{
      enter: '',
      blur: ''
    }">
    <template v-slot="{ syncProps, handleEmits }">
      <autocomplete
        :value="syncProps.value"
        :label="syncProps.label"
        :placeholder="syncProps.placeholder"
        @enter="handleEmits.enter"
        @blur="handleEmits.blur">
      </autocomplete>
    </template>
  </component-sandbox>
</template>

<script>
import ComponentSandbox from 'vue-component-sandbox'
import 'vue-component-sandbox/lib/styles.css' // optional
import '@/components/Autocomplete.vue' // preview component

export default {
  components: {
    ComponentSandbox,
    Autocomplete
  }
}
</script>
```
