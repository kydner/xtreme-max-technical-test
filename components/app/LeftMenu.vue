<template>
  <div class="left-menu w-150 h-screen">
    <div
    v-for="(menu, i) in menus"
    :key="menu.id"
    :class="`${index === i? 'bg-secondary': ''} h-130 border border-tersiery`"
    @click="index = i"
    >

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [],
      index: 1
    }
  },
  mounted() {
    this.menus = [
      {
        id: 1,
        name: 'Browse',
        icon: ''
      },
      {
        id: 2,
        name: 'Suggest Attraction',
        icon: ''
      },
      {
        id: 3,
        name: 'Videos',
        icon: ''
      },
      {
        id: 4,
        name: 'Blog',
        icon: ''
      },
      {
        id: 5,
        name: 'About',
        icon: ''
      }
    ]
  },
}
</script>
