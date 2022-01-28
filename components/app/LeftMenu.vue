<template>
  <div class="left-menu h-screen bg-tersiery">
    <div
    v-for="(menu, i) in menus"
    :key="menu.id"
    :class="`${index === i? 'bg-secondary': 'bg-tersiery'} h-left-menu`"
    @click="index = i"
    >
      <div class="flex flex-col justify-center items-center h-full p-8 text-center">
        <div>
          <img :src="menu.icon" alt="">
        </div>
        <span class="text-grey">
          {{ menu.name }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [],
      index: 0
    }
  },
  mounted() {
    this.menus = [
      {
        id: 1,
        name: 'Browse',
        icon: '/browse.png',
      },
      {
        id: 2,
        name: 'Suggest Attraction',
        icon: '/suggest.png'
      },
      {
        id: 3,
        name: 'Videos',
        icon: '/videos.png'
      },
      {
        id: 4,
        name: 'Blog',
        icon: '/blog.png'
      },
      {
        id: 5,
        name: 'About',
        icon: '/about.png'
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
