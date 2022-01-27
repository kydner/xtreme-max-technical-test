<template>
  <div class="icon-custom">
    <font-awesome-icon :icon="['fas', icon]" :style="`font-size:${size}px`"/>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    size: {
      type: [String, Number],
      default: 12
    }
  }
}
</script>
<style scoped>
.icon-custom {
  cursor: pointer;
}
</style>
