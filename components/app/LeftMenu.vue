<template>
  <div class="left-menu h-screen bg-primary">
    <div
    v-for="(menu, i) in menus"
    :key="menu.id"
    :class="`${index === i? 'bg-secondary': 'bg-primary'} h-130 border border-tersiery`"
    @click="index = i"
    >
      <div class="flex flex-col justify-center items-center h-full p-8 text-center">
        <div>
          Icon
        </div>
        <div>
          {{ menu.name }}
        </div>
      </div>
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
<style scoped>
.left-menu {
  cursor: pointer;
}
</style>
